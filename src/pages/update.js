import React from 'react'

export default function Update() {
  return (
    <div>    <section className="updates-header">
    <div>
        <h1>News & Events</h1>
        <h2>Our latest updates, news and events</h2>
    </div>
</section>

<section className="news">
    <h1 className="title">News & Events</h1>
    <div className="content">
        <div className="news-card">
            <div className="news-image">
                <img src="assest/images/news/evnt1.jpg" />
            </div>
            <div className="news-info">
                <p className="news-category">Chef's Recipe</p>
                <strong className="news-title">
                    <span>Bissara perfection tip: Flavor with finesse.</span>
                </strong>
                <a href="contact" className="more-details">More details</a>
            </div>
        </div>
        <div className="news-card">
            <div className="news-image">
                <img src="assest/images/news/event2.jpg" />
            </div>
            <div className="news-info">
                <p className="news-category">News</p>
                <strong className="news-title">
                    <span>Varied Ftour Ramadan buffet at only 249dh.</span>
                </strong>
                <a href="contact" className="more-details">More details</a>
            </div>
        </div>
        <div className="news-card">
            <div className="news-image">
                <img src="assest/images/news/event3.jpg" />
            </div>
            <div className="news-info">
                <p className="news-category">Events</p>
                <strong className="news-title">
                    <span>Birthday with a Moroccan touch</span>
                </strong>
                <a href="contact" className="more-details">More details</a>
            </div>
        </div>
    </div>
</section></div>
  )
}
