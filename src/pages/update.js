import React from 'react'

export default function Update() {
  return (
    <div>    <section class="updates-header">
    <div>
        <h1>News & Events</h1>
        <h2>Our latest updates, news and events</h2>
    </div>
</section>

<section class="news">
    <h1 class="title">News & Events</h1>
    <div class="content">
        <div class="news-card">
            <div class="news-image">
                <img src="assest/images/news/evnt1.jpg" />
            </div>
            <div class="news-info">
                <p class="news-category">Chef's Recipe</p>
                <strong class="news-title">
                    <span>Bissara perfection tip: Flavor with finesse.</span>
                </strong>
                <a href="contact" class="more-details">More details</a>
            </div>
        </div>
        <div class="news-card">
            <div class="news-image">
                <img src="assest/images/news/event2.jpg" />
            </div>
            <div class="news-info">
                <p class="news-category">News</p>
                <strong class="news-title">
                    <span>Varied Ftour Ramadan buffet at only 249dh.</span>
                </strong>
                <a href="contact" class="more-details">More details</a>
            </div>
        </div>
        <div class="news-card">
            <div class="news-image">
                <img src="assest/images/news/event3.jpg" />
            </div>
            <div class="news-info">
                <p class="news-category">Events</p>
                <strong class="news-title">
                    <span>Birthday with a Moroccan touch</span>
                </strong>
                <a href="contact" class="more-details">More details</a>
            </div>
        </div>
    </div>
</section></div>
  )
}
