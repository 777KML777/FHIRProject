import styles from "./cabecario.module.css"

function Cabecario() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titulo}>LISTA DE ESPERA CLÍNICA MINDCARE</h1>
                <div className={styles.descricao}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea laboriosam quos placeat ab, possimus tempora asperiores ipsum? Ratione nemo perspiciatis a hic praesentium nulla sed fugiat, iure consequuntur corrupti!
                    </p>
                </div>
                <p className={styles.footer}>martinsklebifogueira@hotmail.com <a href="#"> Alternar conta </a> </p>
            </div>
        </>
    )
}

export default Cabecario