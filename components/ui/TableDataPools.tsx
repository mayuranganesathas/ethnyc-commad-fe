import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";

export interface DataTableProps {}
const propData = [
  { id: 1, name: "Pool 1", dao: "DAO 1", maturityDate: "1" },
  { id: 2, name: "Pool 2", dao: "DAO 2", maturityDate: "2" },
  { id: 3, name: "Pool 3", dao: "DAO 3", maturityDate: "3" },
  { id: 4, name: "Pool 4", dao: "DAO 4", maturityDate: "4" },
  { id: 5, name: "Pool 5", dao: "DAO 5", maturityDate: "5" },
];

export interface LendTableOutput {
  addr: string;
  name: string;
  endDate: string;
  bounty: string;
  particpants: string;
}

const DataTable = ({}: DataTableProps) => {
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
    { field: "id", headerName: "Name", flex: 0 },
    { field: "name", headerName: "Pool Address", flex: 1 },
    { field: "dao", headerName: "End Date", flex: 0 },
    { field: "maturityDate", headerName: "Bounty", flex: 0 },
    { field: "addr", headerName: "Participants", flex: 1 },
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
