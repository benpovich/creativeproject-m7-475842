import React, {Component} from 'react';
import './tictactoe.css';
class TicTacToe extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        
        let boardTotal = 800;
        let boardWidth = boardTotal+2*this.props.boardDimensions;
        let boardStyle = {
            "grid-template-columns": "repeat("+this.props.boardDimensions+", auto)",
            "width": boardWidth+"px",
        };
        let squareWidth = boardTotal/this.props.boardDimensions;
        let fontSize= 300/this.props.boardDimensions;
        let squareStyle = {
            "width": squareWidth,
            "height": squareWidth,
            "fontSize": fontSize+"px"
        };
        if(this.props.isOnline){
            if(this.props.isGameFinished){
                if(this.props.isTie){
                    return(
                        <div id="totalboard">
                            <h3>Unfortunately {this.props.username}, you tied with {this.props.opponent}.</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
    
                else if(this.props.isWinner){
                    return(
                        <div id="totalboard">
                            <h3>Congrats {this.props.username}, you won against {this.props.opponent}!</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
                else{
                    return(
                        <div id="totalboard">
                            <h3>Sorry {this.props.username}, you lost against {this.props.opponent} :(</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
                
            }
            else{
                let opPlayer = "";
                if(this.props.player=="X"){
                    opPlayer = "O";
                }
                else{
                    opPlayer = "X";
                }

                return(
                    <div id="totalboard">
                        <h2>{this.props.username}({this.props.player}) vs {this.props.opponent}({opPlayer})</h2>
                        <h3>{this.props.curTurn}'s turn</h3>

                        <div id="board" style={boardStyle}>
                            {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                             ))}
                        </div>
                    </div>
                    
                );
            }
        }
        else{
            if(this.props.isGameFinished){
                if(this.props.isTie){
                    return(
                        <div id="totalboard">
                            <h3>Unfortunately {this.props.username}, you tied.</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
    
                else if(this.props.isWinner){
                    return(
                        <div id="totalboard">
                            <h3>Congrats {this.props.username}, you won!</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
                else{
                    return(
                        <div id="totalboard">
                            <h3>Sorry {this.props.username}, you lost :(</h3>
                            <div id="board" style={boardStyle}>
                                {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                            ))}
                            </div>
                        </div>
                       
                    ); 
                }
                
            }
            else{
                return(
                    <div id="totalboard">
                        <div id="board" style={boardStyle}>
                            {this.props.board.map((value,index) => (
                                <div key={index} id={index} className="boardSquare" style={squareStyle} onClick={this.props.modifyBoard}>{value}</div>
                             ))}
                        </div>
                    </div>
                    
                );
            }
            
            
        }
    }
        

    

}
export default TicTacToe;