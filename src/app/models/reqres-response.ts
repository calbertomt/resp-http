export interface ReqResResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        ReqUser[];
    ad:          Ad;
}

export interface Ad {
    company: string;
    url:     string;
    text:    string;
}

export interface ReqUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
