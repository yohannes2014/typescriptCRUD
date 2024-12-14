export interface Register {
    name: string;
    email: string;
    address: string;
  }
  
  export interface listInfo extends Register {
    id: number;
  }
  
  export interface Props {
    list: listInfo[];
    setList: React.Dispatch<React.SetStateAction<listInfo[]>>;
    setItem: React.Dispatch<React.SetStateAction<listInfo | null>>;
    setInputs: React.Dispatch<React.SetStateAction<Register>>;
    edit: boolean;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    inputs:Register;
  }
  