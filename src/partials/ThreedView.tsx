import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { checkMobile } from '../functions/Functions';

export function ThreedView() {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("isMobile")) {
            let data = localStorage.getItem("isMobile")
            data === "true" ? setIsMobile(true) : setIsMobile(false)
        } else {
            const mobile = checkMobile()
            setIsMobile(mobile)
            localStorage.setItem("isMobile", mobile ? "true" : "false")
        }
    }, [])

    let thisWidth = window.innerWidth;
    console.log("thisWidth", thisWidth);
    let threadWidth = isMobile ? thisWidth : thisWidth - 250
    return (
        <div className='flex-row'>
            <div style={{ overscrollBehavior: "none", width: threadWidth }}>

                {/* <!-- HEADING --> */}
                <div
                    className="w-full bg-green-400 h-16 pt-2 text-white flex justify-between shadow-md"
                    style={{ top: "0px", overscrollBehavior: "none" }}
                >
                    {/* <!-- back button --> */}
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-12 h-12 my-1 text-green-100 ml-2"
                        >
                            <path
                                className="text-green-100 fill-current"
                                d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z" />
                        </svg>
                    </a>
                    <div className="my-3 text-green-100 font-bold text-lg tracking-wide">@rallipi</div>
                    {/* <!-- 3 dots --> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon-dots-vertical w-8 h-8 mt-2 mr-2"
                    >
                        <path
                            className="text-green-100 fill-current"
                            fillRule="evenodd"
                            d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                </div>

                {/* <!-- MESSAGES --> */}
                <div className="mt-20 mb-16">

                    {/* <!-- SINGLE MESSAGE --> */}
                    <div className="clearfix">
                        <div
                            className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
                        >this is a basic mobile chat layout, build with tailwind css</div>
                    </div>

                    {/* <!-- SINGLE MESSAGE 2 --> */}
                    <div className="clearfix">
                        <div
                            className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
                        >It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.</div>
                    </div>

                    {/* <!-- SINGLE MESSAGE 3 --> */}
                    <div className="clearfix">
                        <div
                            className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
                        >check my twitter to see when it will be released.</div>
                    </div>
                </div>
                <div className="container">

                    <h1>Text Soap</h1>
                    <h2>An iMessage chat becomes fodder for daytime drama</h2>

                    <p className="comment">This begins one morning with my friend in San Diego telling me about an earthquake they just had.</p>

                    <div className="imessage">
                        <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? I think this is an earthquake.&rdquo;</p>
                        <p className="from-me">Like is this an earthquake just go back to sleep</p>
                        <p className="from-them">It&rsquo;s more like &ldquo;this is an earthquake. Check the Internet. Yup. Earthquake. This is the size. This is the epicenter. Check social media. Make sure the East Coast knows I&rsquo;m alive. Okay, try and go back to sleep.&rdquo;</p>
                        <p className="from-me no-tail emoji">👍🏻</p>
                        <p className="from-me">Glad you&rsquo;re safe</p>
                    </div>


                    <div className="imessage">
                        <p className="from-me">Time to write some code where I left off</p>
                    </div>

                    <p className="comment">She says:</p>

                    <div className="imessage">
                        <p className="from-them">Previously on As the Code Turns</p>
                    </div>

                    <p className="comment">So I decide to have a little fun with that hand-off:
                    </p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Previously...</p>
                        <p className="from-me no-tail">Brock went to the hospital to check on Cyntheeah...</p>
                        <p className="from-me no-tail">Notice the pretentious spelling of &ldquo;Cyntheeah&rdquo;...</p>
                        <p className="from-me no-tail">While in her hospital room, Diego is standing outside looking through the door window and can hear the entire conversation because he has super hearing.</p>
                        <p className="from-me margin-b_none">Elsewhere, Biff has plans to take down the entire Caspian family with his secret about how Roger Caspian used to be...REGINA Caspian!</p>
                        <p className="from-them margin-t_one">Haha</p>
                        <p className="from-me no-tail">And the budding romance between teens Erika and Johnny bloom</p>
                        <p className="from-me">Back at the hospital, cuz who doesn&rsquo;t hang out at hospitals in their free time, amirite...</p>
                        <p className="from-them margin-t_one">Riiiiight</p>
                        <p className="from-me no-tail margin-b_none">Brock leaves Cyntheeah&rsquo;s room, and Diego sneaks in while she sleeps...</p>
                        <p className="from-me no-tail">It&rsquo;s the worst hospital in the world cuz they leave her chart out for anyone to see...</p>
                        <p className="from-me no-tail">While the nurse isn&rsquo;t watching Diego looks at her chart...</p>
                        <p className="from-me no-tail">And discovers...</p>
                        <p className="from-me no-tail">[bad music]...[Commercial]</p>
                        <p className="from-me no-tail">...TO BE CONTINUED...</p>
                        <p className="from-me">Gotta run, have a safe day in the sun ☀️</p>
                        <p className="from-them margin-t_one">Haha, talk to you later.</p>
                    </div>

                    <p className="comment">So that was a fun exercise. I wasn't planning on doing anything more with it. But by mid-morning I got inspired...</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Heiress Lexus von Doberman - cuz all towns have an heiress - takes an interest in her new pool man, Rodrigo...</p>
                        <p className="from-me no-tail">Lexus&rsquo;s time sunbathing by the pool is interrupted by Biff who has some juicy information on the Caspian family...</p>
                        <p className="from-me no-tail">The Caspians are the largest juice bar magnate in the tri-state area and Lexus plans to take them down, for no reason in particular, just because it&rsquo;s good daytime drama...</p>
                        <p className="from-me">Incidentally, Lexus&rsquo;s daughter is Erika. And Erika&rsquo;s love interest Johnny? Johnny Caspian. Cuz no one saw that little plot twist coming...</p>
                    </div>

                    <p className="comment">I started sending these back throughout the day like scenes from a 5-act play:</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Back at the hospital, Diego sneaks out of Cyntheeah&rsquo;s room with a copy of her chart under his arm, right in front of the nurse&rsquo;s station, but no one notices cuz all the nurses are gossiping. Again, worst. Hospital. Ever.</p>
                        <p className="from-me no-tail">
                            Diego sneaks around the corner to the vending machine, looks in the chart again, with one eyebrow raised and a smirk, and scheming music playing in the background...</p>
                        <p className="from-me">[bad music]...[Commercial]</p>
                        <p className="from-them margin-t_one">This is awesome</p>
                        <p className="from-me no-tail">Brock returns to his home which is amazingly well-lit with track lighting in every room. His maid Juanita tells him that &ldquo;Ze strange man come by ask question about se&ntilde;or Brock&rdquo;. Brock makes a call and plans a meeting...</p>
                        <p className="from-me no-tail">Meanwhile at the beach cabana, Erika, Johnny and friends makes plans for a weekend getaway cruise as all 17-year-olds do...</p>
                        <p className="from-me">Incidentally, last week Erika and Johnny were 10 years-old, but kids don&rsquo;t age fast enough for daytime drama, so now they are 17! Overnight! Like magic!</p>
                    </div>

                    <p className="comment">
                        By early afternoon I could tell the story had taken on a life of its own.</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Brock arrives at a restaurant for a lunch with his old marine buddy, Joze (not a misspelling) cuz nothing says &ldquo;secret meeting&rdquo; like a public restaurant in the middle of the day with plenty of on-lookers.</p>
                        <p className="from-me no-tail">Back at the hospital Dr. Stewart Collins is examining Cyntheeah. Both went to high school together and Stewart had an unrequited crush on her. He looks for her chart but it&rsquo;s missing...</p>
                        <p className="from-me no-tail">Dr. Stew asks the nurse if anyone has been in Cyntheeah&rsquo;s room and the nurse says &ldquo;just her brother...&rdquo;, to which Dr. Stew replies &ldquo;she has no brother...&rdquo;</p>
                        <p className="from-me">[bad music]…[Commercial]</p>
                        <p className="from-them margin-t_one">Haha</p>
                    </div>

                    <p className="comment">Of course, I needed to introduce more characters, cuz that would really expand the iMessage soap universe...</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Brock walks outside the restaurant and gets a phone call from his mother, Amelia, who has more money than Jesus Christ and casually wears padded blazers at home for the fun of it...</p>
                        <p className="from-me no-tail">&ldquo;Darling...just calling cuz I&rsquo;m dreading having drinks at the club with that Doberman bitch.&rdquo;</p>
                        <p className="from-me no-tail">&ldquo;Can&rsquo;t talk now mom...&rdquo;</p>
                        <p className="from-me no-tail">&ldquo;Yes, yes, always something to do with the downtrodden folk&rdquo;</p>
                        <p className="from-me no-tail">As Brock hangs up he notices seated at a table across the street someone who suspiciously looks like Diego. But as a bus passes by the seat is now empty.</p>
                        <p className="from-me no-tail">Joze heads to the beach club for his &ldquo;day job&rdquo; as the former Iraq vet is now in charge of the swanky up-scale beach resort...</p>
                        <p className="from-me no-tail">He spots Johnny and whistles to his favorite cabana boy. &ldquo;Towels need to be changed in Cabana #5, lady and her poodle need more sunscreen.&ldquo;</p>
                        <p className="from-me no-tail">Johnny, having forsaken his family&rsquo;s juice bar fortune, is working a &ldquo;real job&rdquo; for his own cash. Plus, the beach club is a good spot to make lots of coke deals.</p>
                        <p className="from-me no-tail">Joze goes into his office, shuts the door, and opens his wardrobe filled with cheap Love Boat white jackets, &agrave; la Capt. Stubing. Behind the blazers is a safe...</p>
                        <p className="from-me no-tail">Joze unlocks the safe and pulls out a stack of bills and two hand guns. He raises an eyebrow, loads a clip into one of the guns...</p>
                        <p className="from-me">[bad music]...[Commericial]</p>
                    </div>

                    <p className="comment">I dunno who Joze is, but I don&rsquo;t wanna be on his bad side.</p>

                    <div className="imessage">
                        <p className="from-them">This is GOLD!</p>
                    </div>

                    <p className="comment">Naturally.</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Lexus and Amelia have drinks at the country club but each hates the other. Lexus casually mentions she has a new pool man. She also knows that Amelia has been sleeping with her right hand man Biff. No one know what any of this has to do with anything, but the scheming is afoot...</p>
                        <p className="from-me no-tail">Back at the hospital, Brock returns to see Cyntheeah but Dr. Stew stops him in the hall. He asks about the missing chart, cuz doctors don&rsquo;t bother with security, they just do it all themselves. Dr. Stew won&rsquo;t let Brock see her...</p>
                        <p className="from-me no-tail">Brock goes behind the nurses station and raids the drawers for some Vicodin, cuz the nurses are too busy doing something other than their job. Just as Brock turns the corner he&rsquo;s met face-to-face with...</p>
                        <p className="from-me no-tail">DAMIAN CASPIAN!</p>
                        <p className="from-me">Damian is the older brother to Johnny and the rebel of the Caspian juice bar clan. He&rsquo;s obviously not at the hospital to sell smoothies...</p>
                    </div>

                    <p className="comment">This is classic rebel guy with rebel name showing up at the most inconvenient time.</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">At the beach club, cabana boy Johnny is changing towels when he spots Biff. He knows Biff from when he&rsquo;d sneak out of Erika&rsquo;s bedroom at the same time Biff was sneaking out Lexus&rsquo;s window. Also Biff drives a 1984 Pontiac Fierro</p>
                        <p className="from-me no-tail">Biff is there to pick up Erika and to score some blow from the high school dealers. Johnny hides behind a towel rack and sees Joze, sporting a Magnum PI Hawaiian shirt with two Glock 9&rsquo;s leaving his office.</p>
                        <p className="from-me no-tail">As Joze leaves he spots Biff, and Biff spots him. The camera closes in on their faces and they squint...</p>
                        <p className="from-me">[bad music]...[Commercial]</p>
                    </div>

                    <p className="comment">So by the end of the day I knew I needed to tie up things. The final act:</p>

                    <div className="imessage">

                        <p className="from-me no-tail margin-b_none">[Cut to Diego on a boat in the marina]</p>
                        <p className="from-me no-tail">Diego is talking on the phone. Remarkably his phone service is crystal clear.</p>
                        <p className="from-me">Back at the hospital, Damian and Brock stare each other down. No one says anything, no one flinches or blinks. Damian is holding a smoothie...</p>
                    </div>

                    <p className="comment">That kind of thing probably <em>does</em> happen a lot in real life...</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">Brock turns around and goes back to Cyntheeah&rsquo;s room. The nurse tries to stop him, which is uncharacteristic of the nurse since she hasn&rsquo;t been doing her job at all today. As Brock opens the hospital room door he and the nurse see the bed is empty...</p>
                        <p className="from-me no-tail">Cyntheeah is gone...</p>
                        <p className="from-me no-tail">Damian strolls in behind: &ldquo;Well well well, isn&rsquo;t that lovely.&rdquo;</p>
                        <p className="from-me no-tail">Lexus returns homes to find her pool man Rodrigo in her bedroom and looking through her drawers...</p>
                        <p className="from-me no-tail">Lexus: &ldquo;What the hell?!&rdquo; Rodrigo: &ldquo;No hablo Englais, se&ntilde;ora.&rdquo; ¯\_(ツ)_/¯</p>
                        <p className="from-me no-tail">She sees what he&rsquo;s holding. &ldquo;I think I have the perfect job for you, Rodrigo.&rdquo;</p>
                        <p className="from-me">Joze is in his car applying a fake mustache to his face, cuz he&rsquo;s always been a Tom Selleck fan. He checks his Glock, puts on his sunglasses, then lets the tires of his Ford Ranchero squeal down the road.</p>
                    </div>

                    <p className="comment">And so...</p>

                    <div className="imessage">
                        <p className="from-me no-tail margin-b_none">The Caspians plan to introduce a new chocolate with red pepper smoothie at their juice bar that could cause controversy…and a make a few enemies...</p>
                        <p className="from-me no-tail">Erika is at Johnny&rsquo;s house and both are packing for the weekend cruise. Their dialog is only for the younger viewers: Beyoncé this, Kanye that...</p>
                        <p className="from-me no-tail">Diego&rsquo;s boat blows up.</p>
                        <p className="from-me">...CLIFFHANGER...</p>
                        <p className="from-me emoji">😎</p>
                        <p className="from-them margin-t_one emoji">😱</p>
                    </div>

                    <p className="comment">And just like that, a new genre of daytime drama was born: Text Soap.</p>

                </div>
            </div>

            {/* // <!-- MESSAGE INPUT AREA-- > */}
            <div className="sticky w-full flex justify-between bg-green-100" style={{ bottom: "0px" }}>
                <textarea
                    className="flex-grow m-2 py-2 px-4 mr-1 rounded-md border border-gray-300 bg-gray-200 resize-none"
                    rows={1}
                    placeholder="Message..."
                    style={{ outline: "none" }} />
                <button className="m-2" style={{ outline: "none" }}>
                    <svg
                        className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

const mapStateToProps = (state: any) => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = (dispatch: any) => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ThreedView))
