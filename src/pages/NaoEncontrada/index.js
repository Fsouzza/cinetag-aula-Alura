import styles from './NaoEncontrada.module.css';

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Ops! Houve um Erro.</h2>
            <p>O conteúdo que você procura não foi encontrado, ou pode não estar disponível</p>
        </section>
    )
};

export default NaoEncontrada;