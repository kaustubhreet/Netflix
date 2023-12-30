import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from './request';
import Row from './Row';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                isLargeRow={true}
                fetchUrl={requests.fetchNetFlixOriginals}
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Trending Now" fetchUrl={requests.fetchTreding} isLargeRow={true} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} isLargeRow={true} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow={true} />
            <div className="strip" style={{
                padding: "5px",
                backgroundColor: "#6e6e6e"
            }}></div>
            <div className="container-fluid" style={{ padding: "30px 100px", backgroundColor: "black" }}>
                <center>
                    <h3 style={{ color: "#fff" }}>
                        Developed By <br /></h3><h1 style={{ height: "100%", color: "#fff" }}>
                        Kaustubh Reet
                    </h1>
                </center>
            </div>
        </>
    )
}
export default Home;