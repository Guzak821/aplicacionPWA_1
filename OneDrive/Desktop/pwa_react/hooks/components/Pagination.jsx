export function Pagination({ page, totalPages, onPrev, onNext }) {
    return (
        <div className="pagination">
            <button onClick={onPrev} disabled={page === 1}>
                Anterior
            </button>
            <span>Página {page} de {totalPages}</span>
            <button onClick={onNext} disabled={page === totalPages}>
                Siguiente
            </button>
        </div>
    );
}

export default Pagination;