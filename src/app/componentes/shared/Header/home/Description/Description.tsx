"use client"

import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';


const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACYAJgDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAAEFBv/EABwQAQEBAQEBAQEBAAAAAAAAAAABAgMREkEhMf/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A+E8cF43isYLO+N4rynWgo5BRSEo8m5LybmBWhmTcgzDcxHo8FIJpB+IU8AGm+BsCGJ0Xo7UK1FOS0nRejdF6dHKdBWasoUHjnhnjljkldOF+N4OxzxTmksDILMbweYrE7BZhuIDMPxGoDxDcxzGT8ZR6GOZyOZHnI5lKnlJ+Q3Kn5BrJcHUusk7iveSNxTkKl3CdKdwjUW5JSqztZTQH45Yb4GxxSurCrHPDLA2K80tgPB5jeCzFZU7B4h/OF4ijnBpcNxk/GQc4p55T6Bs5MmRZyZMpUdJuQayquS9ZK2o95T9Iu3lN1h4yLpE24r6RNtSViazumPrYo8DYZ4GuOV1FUNMoKryFgR5CPK0JYbiKecT4VcoKdijnFPOE8oq5wlJTMZMkbEMkJQLuS9ZU2F7hG1H0iXrF3SJO0GCh6xJ0/wBWdUnQ8MRpm0x9ZXQ120NckdQKCj1QWq8g4PIBYqsLYo5quSTmr5GTsV8lfNJyV8y1OqMGyFYNhKRrC9w2l7Bk3SI+yzqj7AMRdkfRZ1/UfU0PCNM5pjCp9Da56G1zyL62qDVa0FqkEUo83+kyjzVYFVc6q5VFzqrlRJYv5VVzqHlVfOlqVizFMlT40bKWksMtL3Wui96KBXWpOtUdKk60RiXr+ouirrUnSjDQnVZzTGEf05dF/QbpLFNHdAtDdBujyGlMlHmkTQ800Mr51Ty0hxVPPQhY9DlpVz0g56U89EtTsXY0ZNJMaMmyksUXRetF3YNaYuOdNJeujOmk3TQwCOtS9Kd1qbdNBL1WDpjY2lfTl0T9OfRcadG3Tn0V9N9DinNNlMzpPNDzRVivGlHPSLGj8aLTYv56U42gxo/GiWlsXZ2ZNo87Mmy6nYpuwa2T9h1sSWC3pNvQtbI3o0KX0qfdM3ojdUkKG1g2sbA1B9N9E/Tvo4lOjfpvSvRShi/FNlHmkyjzQrp5U5p2NJc07FTqkWY0fjSPFOzU7WsV50ObTZ0OaLpLDvpy6K+nLoYnY7rRWtNql6qkSoN0nVHql6VidDWctY5deV676zCjHZRRmB0cCyZlmJXXwZk7DMnVodinYrMlRMzRysxSV31y1mNEugWlaZlOUeitA0zLRKgZmOV//9k=';

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);
    
    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder,
});

    return (
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>

                <div className={styles.Description__imageContainer}>
                    <Image
                        src="/images/description.jpeg"
                        alt="products marketplace"
                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />

                </div>

            </button>
            <div>
                <h2>Bring teh futur today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque esse provident quas. Tempore repellat dicta dolor tenetur? Labore itaque, numquam harum eligendi reiciendis sequi fuga odio? Esse, provident voluptatem?</p>
            </div>
        </section>
    )
}