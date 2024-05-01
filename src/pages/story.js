import React from 'react'

export default function Story() {
  return (
    <div>
        <section className="story-header">
        <div>
            <h1>Beldi Food Story</h1>
            <h2>This is How Our Beldi Food Came to Be.</h2>
        </div>
    </section>

    <section className="about-us">
        <div>
            <h1>This is the story of Beldi Food—where the spirit of Morocco is served on a plate.</h1>
            <p>In the heart of Marrakech, amidst the labyrinthine alleys of the medina, a culinary journey began. It was here that Chef Nadia's love for Moroccan cuisine was sparked by the aromatic spices, bustling markets, and the warm hospitality of her grandmother's kitchen.</p>
            <p>Growing up, Chef Nadia, with her grandmother Fatima's guidance, learned the art of traditional Beldi cooking. Fatima's recipes were not just about ingredients; they were stories passed down through generations, each dish carrying the history and flavors of Morocco.</p>
            <p>With this revelation, Beldi Food was born—a homage to the essence of Moroccan cooking and the spirit of sharing meals with loved ones. Nestled in the heart of Marrakech, Beldi Food is a culinary sanctuary where tradition meets innovation.</p>
            <p>Every dish at Beldi Food tells a story—a tale of the artisans, farmers, and chefs who have poured their love and expertise into creating flavors that transport you to the heart of Morocco. From the sizzle of the grill to the aroma of freshly baked bread, each moment at our table is a celebration of the rich flavor of Moroccan cuisine.</p>
            <p>We invite you to join us on this culinary adventure. Whether you are a seasoned traveler or a curious food lover, Beldi Food promises an experience that is both authentic and unforgettable. Come taste the magic of Morocco, where every meal is a journey and every bite a discovery.</p>
        </div>
    </section>

    <section className="team">
        <div>
            <h1 className="title">Team Members</h1>
            <div className="team-member">
                <div className="team-image">
                    <img src="assest/images/team/chef1.jpg" alt="Nadia"/>
                </div>
                <div className="team-info">
                    <h2 className="team-title">
                        <span>Nadia</span>
                    </h2>
                    <p className="team-category">Chef & Founder</p>
                </div>
            </div>
            <div className="team-member">
                <div className="team-image">
                    <img src="assest/images/team/chef2.jpg" alt="Ahmed"/>
                </div>
                <div className="team-info">
                    <h2 className="team-title">
                        <span>Ahmed</span>
                    </h2>
                    <p className="team-category">Restaurant Manager</p>
                </div>
            </div>
            <div className="team-member">
                <div className="team-image">
                    <img src="assest/images/team/chef3.jpg" alt="Haja Fatima"/>
                </div>
                <div className="team-info">
                    <h2 className="team-title">
                        <span>Haja Fatima</span>
                    </h2>
                    <p className="team-category">Senior Chef</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
