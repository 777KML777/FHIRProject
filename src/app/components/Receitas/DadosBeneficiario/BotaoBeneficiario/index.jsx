"use client"

export default function BotaoBeneficiario({ children, titulo, Class, onToggle }) {

    return (
        <>
            <button className={Class} onClick={onToggle}>
                {titulo}
                {children}
            
            </button>
        </>
    );
}