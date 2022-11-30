import { useFetch } from "../Hooks/useFetch"

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    console.log({data, isLoading, hasError});
    const { author, quote } = !!data && data[0];

    // if ( isLoading) { //alternativa para Message Loading
    //     return (
    //         <h1>Cargando...</h1>
    //     );
    // }

    return (
        <>
            <h1>Bracking Quotes</h1>

            {
                ( isLoading )
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer"> { author }</footer>
                        </blockquote>
                    )

            }

            <button className="btn btn-primary">
                Next quote
            </button>
        </>
    );
}
