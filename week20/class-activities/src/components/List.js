export const List = ({ items }) => {
    return (
        <ul>
            {
                items.map((item, index) => {
                    return(
                        <div key={index}>
                            <li>{ item }</li>
                        </div>
                    )
                })
            }
        </ul>
    );
};