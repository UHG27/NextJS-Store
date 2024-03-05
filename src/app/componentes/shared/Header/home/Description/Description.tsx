import styles from './Description.module.sass';
import Image from 'next/image';

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image
                src="/images/description.jpeg"
                alt="products marketplace"
                width={500}
                height={300} 
                />
            <div>
                <h2>Bring teh futur today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque esse provident quas. Tempore repellat dicta dolor tenetur? Labore itaque, numquam harum eligendi reiciendis sequi fuga odio? Esse, provident voluptatem?</p>
            </div>
        </section>
    )
}