import React, { Component } from 'react';
import Node from '../../components/Node/Node';
import Line from '../../components/Line/Line';
import windowSize from 'react-window-size';
import './BFS.css';
import '../../components/Node/Node.css'
import Index from '../../components/Index/Index'
//    {name:''}


const item =[
{name:'Oradia',x:140,y:65,child:[{name:'Zerind'},{name:'Sibiu'}],id:'Oradia',key:1},
{name:'Zerind',x:90,y:130,child:[{name:'Arad'},{name:'Oradia'}],id:'Zerind',key:2},
{name:'Arad',x:60,y:200,child:[{name:'Timisoara'},{name:'Sibiu'},{name:'Zerind'}],id:'Arad',key:3},
{name:'Sibiu',x:260,y:260,child:[{name:'Rimnicu_Vilcea'},{name:'Fagaras'},{name:'Oradia'},{name:'Arad'}],id:'Sibiu',key:4},
{name:'Timisoara',x:60,y:345,child:[{name:'Lugoj'},{name:'Arad'}],id:'Timisoara',key:5},
{name:'Lugoj',x:185,y:400,child:[{name:'Mehadia'},{name:'Timisoara'}],id:'Lugoj',key:6},
{name:'Mehadia',x:190,y:470,child:[{name:'Dobreta'},{name:'Lugoj'}],id:'Mehadia',key:7},
{name:'Dobreta',x:187,y:540,child:[{name:'Craiova'},{name:'Mehadia'}],id:'Dobreta',key:8},
{name:'Craiova',x:340,y:560,child:[{name:'Pitesti'},{name:'Rimnicu_Vilcea'},{name:'Dobreta'}],id:'Craiova',key:9},
{name:'Pitesti',x:445,y:420,child:[{name:'Rimnicu_Vilcea'},{name:'Craiova'},{name:'Bucharest'}],id:'Pitesti',key:10},
{name:'Rimnicu_Vilcea',x:300,y:340,child:[{name:'Sibiu'},{name:'Craiova'},{name:'Pitesti'}],id:'Rimnicu_Vilcea',key:11},
{name:'Fagaras',x:435,y:280,child:[{name:'Sibiu'},{name:'Bucharest'}],id:'Fagaras',key:12},
{name:'Bucharest',x:595,y:495,child:[{name:'Fagaras'},{name:'Pitesti'},{name:'Giurgiu'},{name:'Urziceni'}],id:'Bucharest',key:13},
{name:'Giurgiu',x:540,y:590,child:[{name:'Bucharest'}],id:'Giurgiu',key:14},
{name:'Urziceni',x:700,y:430,child:[{name:'Bucharest'},{name:'Hirsova'},{name:'Vaslui'}],id:'Urziceni',key:15},
{name:'Hirsova',x:825,y:450,child:[{name:'Urziceni'},{name:'Eforie'}],id:'Hirsova',key:16},
{name:'Eforie',x:880,y:550,child:[{name:'Hirsova'}],id:'Eforie',key:17},
{name:'Vaslui',x:780,y:285,child:[{name:'Urziceni'},{name:'Iasi'}],id:'Vaslui',key:18},
{name:'Iasi',x:720,y:170,child:[{name:'Vaslui'},{name:'Neamt'}],id:'Iasi',key:19},
{name:'Neamt',x:605,y:120,child:[{name:'Iasi'}],id:'Neamt',key:20},

];

const road =[
    {id:'OradiaZerind',cost:71,key:1,x1:140,y1:65,x2:90,y2:130},
    {id:'OradiaSibiu',cost:151,key:2,x1:140,y1:65,x2:260,y2:260},
    {id:'ZerindArad',cost:75,key:3,x1:90,y1:130,x2:60,y2:200},
    {id:'SibiuArad',cost:140,key:4,x1:60,y1:200,x2:260,y2:260},
    {id:'TimisoaraArad',cost:118,key:5,x1:60,y1:200,x2:60,y2:345},
    {id:'TimisoaraLugoj',cost:111,key:6,x1:185,y1:400,x2:60,y2:345},
    {id:'MehadiaLugoj',cost:70,key:7,x1:185,y1:400,x2:190,y2:470},
    {id:'MehadiaDobreta',cost:75,key:8,x1:190,y1:470,x2:187,y2:540},
    {id:'CraiovaDobreta',cost:120,key:9,x1:187,y1:540,x2:340,y2:560},
    {id:'CraiovaPitesti',cost:138,key:10,x1:445,y1:420,x2:340,y2:560},
    {id:'Rimnicu_VilceaCraiova',cost:146,key:11,x1:300,y1:340,x2:340,y2:560},
    {id:'Rimnicu_VilceaPitesti',cost:97,key:12,x1:300,y1:340,x2:445,y2:420},
    {id:'Rimnicu_VilceaSibiu',cost:80,key:13,x1:300,y1:340,x2:260,y2:260},
    {id:'FagarasSibiu',cost:99,key:14,x1:435,y1:280,x2:260,y2:260},
    {id:'BucharestFagaras',cost:211,key:15,x1:435,y1:280,x2:595,y2:495},
    {id:'BucharestPitesti',cost:101,key:16,x1:595,y1:495,x2:445,y2:420},
    {id:'BucharestGiurgiu',cost:90,key:17,x1:595,y1:495,x2:540,y2:590},
    {id:'BucharestUrziceni',cost:85,key:18,x1:595,y1:495,x2:700,y2:430},
    {id:'UrziceniHirsova',cost:98,key:19,x1:825,y1:450,x2:700,y2:430},
    {id:'HirsovaEforie',cost:86,key:20,x1:825,y1:450,x2:880,y2:550},
    {id:'UrziceniVaslui',cost:142,key:21,x1:700,y1:430,x2:780,y2:285},
    {id:'VasluiIasi',cost:92,key:22,x1:780,y1:285,x2:720,y2:170},
    {id:'NeamtIasi',cost:87,key:23,x1:720,y1:170,x2:605,y2:120},
    
];
const links ={
    OradiaZerind:false,
    OradiaSibiu:false,
    ZerindArad:false,
    SibiuArad:false,
    TimisoaraArad:false,
    TimisoaraLugoj:false,
    MehadiaLugoj:false,
    MehadiaDobreta:false,
    CraiovaDobreta:false,
    CraiovaPitesti:false,
    Rimnicu_VilceaCraiova:false,
    Rimnicu_VilceaPitesti:false,
    Rimnicu_VilceaSibiu:false,
    FagarasSibiu:false,
    BucharestFagaras:false,
    BucharestPitesti:false,
    BucharestGiurgiu:false,
    BucharestUrziceni:false,
    UrziceniHirsova:false,
    HirsovaEforie:false,
    UrziceniVaslui:false,
    VasluiIasi:false,
    NeamtIasi:false,
    
};
let visited = {
    Bucharest:false,
    Giurgiu:false,
    Hirsova:false,
    Eforie:false,
    Fagaras:false,
    Arad:false,
    Lugoj:false,
    Dobreta:false,
    Craiova:false,
    Urziceni:false,
    Neamt:false,
    Oradia:false,
    Zerind:false,
    Timisoara:false,
    Mehadia:false,
    Sibiu:false,
    Pitesti:false,
    Rimnicu_Vilcea:false,
    Vaslui:false,

}
const cost = {
        OradiaZerind:71,
        OradiaSibiu:151,
        ZerindArad:75,
        SibiuArad:140,
        TimisoaraArad:118,
        TimisoaraLugoj:111,
        MehadiaLugoj:70,
        MehadiaDobreta:75,
        CraiovaDobreta:120,
        CraiovaPitesti:138,
        Rimnicu_VilceaCraiova:146,
        Rimnicu_VilceaPitesti:97,
        Rimnicu_VilceaSibiu:80,
        FagarasSibiu:99,
        BucharestFagaras:211,
        BucharestPitesti:101,
        BucharestGiurgiu:90,
        BucharestUrziceni:85,
        UrziceniHirsova:98,
        HirsovaEforie:86,
        UrziceniVaslui:142,
        VasluiIasi:92,
        NeamtIasi:87,
}
let queue =[];
let total = 0;
class BFS extends Component{
    constructor(props){
        super(props);
        this.state = {
            source:'Arad',
            destination:'Neamt',
            toggle:1
        };
    }

    selectnode = (id)=>{
        
        if(this.state.toggle === 1){
            this.setState({
                source:id,
                toggle :2
            })
            
        }
        else if(this.state.toggle === 2){
            this.setState({
                destination:id,
                toggle :3
            });
            
            let visit = {...visited};
            let link = {...links};
            let stop = false;
            visit[this.state.source]=true;
            setTimeout(() =>{
                this.traversal({...this.state},visit,link,stop);
                //
            },100);
            
        }
        else{
            
            return;
        }
        document.getElementById(id).style.background = 'blue';
        
    }

    traversal = (state,visit,lin,stop) =>{
        
        
        item.map((p,index)=>{
            if(p.name===state.source&&!stop){
                p.child.map((name)=>{
                    
                    if(!visit[name.name]&&!stop){
                        queue.push(name);
                        visit[name.name] = true;
                        let linkId = this.getLineid(state.source,name.name);
                        //console.log('cas' +linkId);
                        if(!lin[linkId]){                          
                                document.getElementById(linkId).style.background = '#7EC384';
                                total+= cost[linkId];
                                document.getElementById('total').innerHTML = total;
                            lin[linkId] = true;
                        }
                        if(state.destination === name.name){
                            console.log(true);
                            stop = true;                      
                        }
                            
                    }
                    
                })
            }
        })
        if(!stop){
            let visitedNode = queue.shift().name
            document.getElementById(visitedNode).style.background = 'green';
            state = {
                source: visitedNode,
                destination:state.destination,
                toggle:1
            };
            //console.log(state,queue,visit);
            console.log(visitedNode);
            
            setTimeout (()=>{
                this.traversal(state,visit,links,stop);
            },100 );
        }
        
        
        

    }

    getLineid = (n1,n2) =>{
        let l1 = n1.length;
        let l2 = n2.length;
        
        if(l1<l2){
            //console.log('1'+n2+n1);
            return n2+n1;
        }
        
        if(l1>l2){
            //console.log('2'+n1+n2);
            return n1+n2;
        }
        if(l1===l2){
            const n3 = road.findIndex(p => {
                if(p.id === n1+n2) {
                    //console.log('3'+n1+n2);
                    return n1+n2;
                }
              })
            if(n3 === -1){
                //console.log('4'+n2+n1);
                return n2+n1;
            }
            else {
                //console.log('5'+n3);
                return n1+n2;
            }
        }
        
    }

   

    render(){
        const Ma = item.map((n,index)=>{
           return <Node name = {n.name}
            x = {n.x * this.props.windowWidth/1220}
            y = {n.y * this.props.windowHeight/600}
            child = {n.child}
            id = {n.id}
            click = {() => this.selectnode(n.id)}
            key = {n.key}
            />
        
        });
        const lines = road.map((n,index)=>{
            return <Line
            id={n.id}
            key = {n.key}
            x1 = {n.x1* this.props.windowWidth/1220}
            y1 = {n.y1* this.props.windowHeight/600}
            x2 = {n.x2* this.props.windowWidth/1220}
            y2 = {n.y2* this.props.windowHeight/600}
            cost = {n.cost}/>
        });
        
        return(
            <div >
                {lines}
                {Ma}
                <Index/>
                <div className = 'Total'>
                <a>Total cost: </a>
                <a id = 'total' >0</a>
                <br></br>
                
                </div>
                
                <p className = 'data'>
                    By: Yogesh Kothari<br></br>
                    Assignment : The aim of the project is to create GUI, where Romania map will be taken as an
input. Apply Breadth first search algorithm on Romania map.
                </p>
            </div>
        );
    

}
}
export default windowSize(BFS);