export interface Register {
    name: string;
    email: string;
    address: string;
  }
  
  export interface listInfo extends Register {
    id: number;
  }


  export interface Props {
    items:listInfo;
    edit:boolean;
    handleSelect : () => void;
    update : () => void;
    deleteItem : () => void;
  }