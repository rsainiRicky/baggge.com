export interface PROVIDER {
  provider_id: number;
  provider_name: string;
  provider_code: string;
  service_id: number;
  service: string;
  provider_image: string;
  status: string;
}

export interface AppState {
  providers: PROVIDER[];
}
