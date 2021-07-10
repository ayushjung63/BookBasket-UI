import React, { Component } from 'react';
import BookImage from './book-img.jpg'
import Java from './java.jpg'
import Annapurna from './annapurna.jpg'
import Illuminations from "./Illuminations.jpg"
import indistractable from './indistractable.jpg'
import TheArcher from './TheArcher.jpg'
import r2 from './r2.jpg'
 
export default class Dummy extends Component {
	render() {
		return (
			<div>
				<div className="ccontent">
      	<div className="book-content">
      
 
        <div className="book-card">
          <div className="book-img">
              <img src={Java} />
          </div>
          <div className="book-data">
            <p><b>OOP in JAVA</b></p>
            <p>Author :James Patterson</p>
            <p><i>NPR.299</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>


        <div className="book-card">
          <div className="book-img">
              <img src={Annapurna} />
          </div>
          <div className="book-data">
            <p><b>Annapurna</b></p>
            <p>Author :Maurice Herzog</p>
            <p><i>NPR.638</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

        <div className="book-card">
          <div className="book-img">
              <img src={indistractable} />
          </div>
          <div className="book-data">
            <p><b>Indistractable</b></p>
            <p>Author :Nir Eyal</p>
            <p><i>NPR.798</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

         <div className="book-card">
          <div className="book-img">
              <img src={r2} />
          </div>
          <div className="book-data">
            <p><b>Ready Player Two</b></p>
            <p>Author :Ernest Cline</p>
            <p><i>NPR.1,118</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

         <div className="book-card">
          <div className="book-img">
              <img src={Illuminations} />
          </div>
          <div className="book-data">
            <p><b>Illuminations</b></p>
            <p>Author :Walter Benjamin</p>
            <p><i>NPR.1,1598</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

        <div className="book-card">
          <div className="book-img">
              <img src={TheArcher} />
          </div>
          <div className="book-data">
            <p><b>The Archer</b></p>
            <p>Author :Paulo Coelho</p>
            <p><i>NPR.400</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

         <div className="book-card">
          <div className="book-img">
              <img src={indistractable} />
          </div>
          <div className="book-data">
            <p><b>Indistractable</b></p>
            <p>Author :Nir Eyal</p>
            <p><i>NPR.798</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>

        <div className="book-card">
          <div className="book-img">
              <img src={TheArcher} />
          </div>
          <div className="book-data">
            <p><b>The Archer</b></p>
            <p>Author :Paulo Coelho</p>
            <p><i>NPR.400</i></p>
             <button class="view"><a style={{ cursor:"pointer" }} href="/pr">View More</a></button>
          </div>
        </div>
       
    

        </div>
        </div>
			</div>
		);
	}
}
