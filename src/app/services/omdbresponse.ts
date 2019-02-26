export interface IOMDBResponse {
    Title:string;
    Year:string;
    Poster:string;
    Plot: string;
    Genre: string;
    Ratings: IRatings[];
    

}
export interface IRatings{
    Source: string;
    Value: string;
}