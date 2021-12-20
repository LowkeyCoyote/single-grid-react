import React from 'react';
import './desktop.card.css'

export const Desktop = () => {
    return(
        <>
            <div className={'desktop'}>
                <div className={'first-section'}>
                    <h2>Join our community</h2>
                    <h3>30-day, hassle-free money back guarantee</h3>
                    <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any
                        developers who are serious about honing their skills.</p>
                </div>
                <div className={'second-section'}>
                    <h3>Monthly Subscription</h3>
                    <div className={'price-row'}>
                        <div className={'price'}>$29</div>
                        <div className={'month'}>per month</div>
                    </div>
                    <p>Full access for less than $1 a day</p>
                    <button className={'btn'}>Sign up</button>

                </div>
                <div className={'third-section'}>
                    <h3>Why us</h3>
                    <ul className={'list'}>
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercices</li>
                        <li>Acces to out GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard Desks</li>
                        <li>New videos every week</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Desktop;