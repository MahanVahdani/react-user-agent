export interface Session {
    authenticatable_id: number;
    authenticatable_type: string;
    cleared_by_user: boolean;
    id: number;
    ip_address: string;
    location: {
      ip: string;
      lat: number;
      lon: number;
      city: string;
      state: string;
      country: string;
      continent: string;
      currency: string;
      default: boolean;
      iso_code: string;
      postal_code: string;
      state_name: string;
      timezone: string;
    };
    login_at: string;
    login_successful: boolean;
    logout_at: string | null;
    user_agent: string;
    [key: string]: any;
  };
  
  export interface UserAgentProps {
    apiUrl: string;
  };

  export interface DataFetchingProps {
    apiUrl: string;
  };
  
  export interface DisplayDataProps {
    session: Session[];
  };

