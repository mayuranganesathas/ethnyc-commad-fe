import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";

export interface DataTableProps { }
const propData = [
  { id: 1, name: "Best Coven Lane", dao: "CovenDAO", maturityDate: "07/07/2022", addr: "0x7cE56.....V3596" },
  { id: 2, name: "Avatar Boys", dao: "AvatarDAO", maturityDate: "21/8/2022", addr: "0x9fT76.....97Q78" },
  { id: 3, name: "Alors", dao: "BaguetteDAO", maturityDate: "13/10/2022", addr: "0x1cA74.....V7683" },
  { id: 4, name: "Strongest Spell", dao: "SpellDAO", maturityDate: "29/11/2022", addr: "0x35c56.....69Y42" },
  { id: 5, name: "Love Potion", dao: "HealingDAO", maturityDate: "27/12/2022", addr: "0x7gt66.....85739" },
];

export interface LendTableOutput {
  addr: string;
  name: string;
  endDate: string;
  bounty: string;
  particpants: string;
}

const DataTable = ({ }: DataTableProps) => {
  const [allBonds, setAllBonds] = useState<LendTableOutput[]>(propData);
  const [selectedBondId, setSelectedBondId] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [cellValues, setCellValues] = useState({
    addr: "DEFAULT",
    name: "DEFAULT",
    maturityDate: "DEFAULT",
    dao: "DEFAULT",
  });

  const columnDefs: GridColDef[] = [
    { field: "id", headerName: "#", flex: 0 },
    { field: "name", headerName: "Pool Name", flex: 1 },
    { field: "dao", headerName: "End Date", flex: 0 },
    { field: "maturityDate", headerName: "Bounty", flex: 0 },
    { field: "addr", headerName: "Address", flex: 1 },
    {
      field: "Description",
      flex: 0.5,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            className="bg-black "
            onClick={(e) => {
              lendingDetailModal(cellValues.row);
            }}
          >
            Lending Details
          </Button>
        );
      },
    },
  ];
  //button turns modal true, passes cell values

  const lendingDetailModal = (cellValues: any) => {
    setModalOpen(true);
    setCellValues(cellValues);
  };

  return (
    <div id="lend-table" style={{ width: "100%" }}>
      <DataGrid
        rows={allBonds}
        columns={columnDefs}
        hideFooter={true}
        autoHeight={true}
      />
    </div>
  );
};

export default DataTable;
