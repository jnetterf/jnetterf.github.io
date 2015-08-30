/**
 * jnetterf.github.io
 * (C) Josh Netterfield <joshua@nettek.ca> 2014-2015.
 */

import React = require("react");
import {Link} from "react-router";

var {topbar, heading, links, softdev, ndash, intro} = require("./main.css");

class Main extends React.Component<Main.IProps, {}> {
    render() {
        return <div>
            <header>
                <div className={topbar} />
                <h1 className={heading}>Josh Netterfield <span className={ndash}>&ndash;</span> <span className={softdev}>Software developer</span>
                <div className={links}>
                    <code>
                    <ul><li>
                        <strong>
                            <a href="mailto:joshua@nettek.ca" target="_blank">joshua@nettek.ca</a>
                        </strong>{" \u00a0 "}
                        <strong>
                            <a href="https://github.com/jnetterf" target="_blank">github</a>
                        </strong> {"\u00a0\u00a0"}
                        <strong>
                            <a href="/CV - Josh Netterfield.pdf" target="_blank">résumé</a>
                        </strong>
                    </li></ul>
                    </code>
                </div>
                </h1>
                <aside>
                    <p className={intro}>
                    In the past few years, I have…
                    </p>
                    <ul>
                        <li>
                            worked on tools for <strong>Stripe</strong> merchants, and in the
                            process made style testing more than{" "}
                            <a href="https://twitter.com/SlexAxton/status/626897172647145472" target="_blank">{" "}
                            20x faster</a>. You can {" "}
                            <a href="https://github.com/jnetterf/electric-huxley" target="_blank">use
                            my project, electric-huxley</a> in your project.
                        </li>
                        <li>
                            designed and implemented <a href="https://khanacademy.org/coach/demo" target="_blank">
                            reports</a> for parents and teachers at <strong>Khan Academy</strong>.
                        </li>
                        <li>
                            written the <strong>most-used</strong> Bible and podcast apps for
                            BlackBerry 10.
                        </li>
                        <li>
                            implemented <strong>WebGL</strong>, CSS filter effects,
                            and CSS shaders for the BlackBerry 10 WebKit port.
                        </li>
                    </ul>

                    <p>
                        I am part of the University of Waterloo Software Engineering class of 2017.
                    </p>
                    <br />
                    <h2>A home for sheet music</h2>
                    <p>
                        I'm working on <a href="https://jnetterf.github.io/satie" target="_blank">
                        <strong>Satie</strong></a>, a
                        high-quality sheet music renderer for the web, and <strong>Ripieno</strong>, a collaborative
                        sheet music editor. If you have a few moments, check out Satie.
                    </p>

                    <p>
                        If you're interested in changing how sheet music is made and published, <strong>get in touch</strong>.
                    </p>
                </aside>
            </header>
        </div>;
    }
}

module Main {
    export interface IProps {
    }
}

export default Main;
