const poolABI = [
  [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "poolAddr",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "_poolName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_endDate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "_viralityOracle",
          type: "address",
        },
      ],
      name: "PoolCreated",
      type: "event",
    },
    {
      inputs: [
        { internalType: "string", name: "_poolName", type: "string" },
        { internalType: "uint256", name: "_endDate", type: "uint256" },
        { internalType: "address", name: "_viralityOracle", type: "address" },
      ],
      name: "createPool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
];

export default poolABI;
