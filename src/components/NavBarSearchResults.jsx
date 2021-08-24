import NavBarSearchResult from "./NavBarSearchResult";

const NavBarSearchResults = ({results = []}) => {
    if (!results) results = [];
    console.log(results);
    return results.map(result => (
        <>
            <NavBarSearchResult character={result} />
        </>
    ))
}

export default NavBarSearchResults;