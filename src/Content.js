import React from 'react';
import { directive } from '@babel/types';
class Content extends React.Component
{
    render()
    {
        return(
            <div>
                <section>
                    <nav id="navleft">
                        <a  href="#"><div id="navleftlinks">Home</div></a>
                        <a  href="#"><div id="navleftlinks">Store</div></a>
                        <a  href="#"><div id="navleftlinks">About</div></a>
                        <a  href="#"><div id="navleftlinks">Contact Us</div></a>
                        <a  href="#"><div id="navleftlinks">Support</div></a>
                    </nav>
                    <span id="conright">
                        London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.
                    </span>
                </section>
            </div>
        );
    }
}
export default Content;