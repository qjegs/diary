import React from "react";
import styles from './css/sidebar.module.css';


export class Sidebar extends React.Component {

    OnNewItemClick(): void {
        alert('New Item');
    }
    render() : JSX.Element {
        return (
        <div>
           
                <nav>
                    <ul>
                        <li ><button onClick={this.OnNewItemClick}>New Item</button></li>
                        <li className={styles.listitem}>Edit</li>
                        <li>Delete</li>                
                    </ul>
                </nav>
            
        </div>
            
                   )
    }
}