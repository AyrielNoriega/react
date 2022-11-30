import { UseCounter, useFetch } from "../Hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = UseCounter( 1 );

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    // if ( isLoading) { //alternativa para Message Loading
    //     return (
    //         <h1>Cargando...</h1>
    //     );
    // } 


    const previous = () => {
        if ( counter <= 1) return;
        decrement()
    }

    return (
        <>
            <h1>Bracking Quotes</h1>

            {
                //( isLoading )
                //    ? (
                //        <div className="alert alert-info text-center">
                //            Loading...
                //        </div>
                //    )
                //    : (
                //        <blockquote className="blockquote text-end">
                //            <p className="mb-1">{ quote }</p>
                //            <footer className="blockquote-footer"> { author }</footer>
                //        </blockquote>
                //    )

                    isLoading
                    ? <LoadingQuote />
                    :   <Quote author={ author } quote={ quote } />
            }

            <button
                className="btn btn-primary m-1"
                disabled={ isLoading }
                onClick={ () => previous() }
            >
                Previous quote
            </button>
            <button
                className="btn btn-primary m-1"
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Next quote
            </button>({ counter })
        </>
    );
}
