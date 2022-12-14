import React, { Component } from "react";
import styled from 'styled-components'; 

const Disaccount = (props) => 
                    <div className = "column discount">
                        <h1> Discount Code or Voucher  </h1>
                        <p>
                            Enter your Discount code or voucher to recieve a discount on your total order.
                            Multiple vouchers cannot be applied. 
                        </p>
                        <div className = "field has-addons">
                            <div className = "control">
                                <input className = "input" type="text" />
                            </div>
                            <div className = "control">
                                <button className = "button is-link">
                                    Redeem
                                </button>
                            </div>
                        </div>
                    </div>;

export default Disaccount;