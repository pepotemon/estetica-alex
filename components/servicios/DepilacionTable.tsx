export default function DepilacionTable({
    rows,
}: {
    rows: readonly (readonly [string, string])[];
}) {
    return (
        <div className="dep-table-wrap">
            <table className="dep-table">
                <thead>
                    <tr>
                        <th>ZONA</th>
                        <th>Sesión</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([zone, price], index) => {
                        const isSection = price === "";
                        return isSection ? (
                            <tr key={`${zone}-${index}`} className="dep-section">
                                <td colSpan={2}>{zone}</td>
                            </tr>
                        ) : (
                            <tr key={`${zone}-${index}`}>
                                <td>{zone}</td>
                                <td>{price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}