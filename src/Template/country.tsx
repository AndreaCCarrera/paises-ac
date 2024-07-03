export interface Props {
    searchTerm: string;
    colorLines: boolean; 
    originalCountries: Country[];
  }

export interface Country {
    
    capital: string;
    flags: {
      png: string;
    };
    independent: boolean;
    landlocked: boolean;
    name: {
      common: string;
      official: string;
    };
    population: number;
    region: string;
    unMember: boolean;
  }