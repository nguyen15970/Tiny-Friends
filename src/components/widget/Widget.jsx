import { useState} from 'react'
import pgnDon from '../../images/chuot/2.png'
import pngLinh from '../../images/gau/gau 2.png'
import pngAn from '../../images/tho/2.png'
import pngChom from '../../images/vit/4.png'
import WidgetRight from '../WidgetLeft'
import gifDon from '../../images/gif mascot/DON.gif'
import gifLin from '../../images/gif mascot/lin.gif'
import gifAn from '../../images/gif mascot/AN.gif'
import gifChom from '../../images/gif mascot/CHOM.gif'




import './widget.scss'

export default function Widget() {
   
    const [id, setId] = useState(1);
    const list =[
      {
        img:gifDon ,
        content:'  Xin chào tớ là DonTớ rất thích chạy nhảy và các chuyến đi chơi cùng mọi người ở Tiny WorldTớ thích màu hồng và tớ đại diện cho sự năng động Hãy cùng đến đây và chới với tớ',
        backgound: 'background:#FF7C90',
        id:1
      },
      {
        img:gifLin ,
        content:' Xin chào tớ là Lin Sở thích của tớ là giúp mọi người và ngủ Món ăn yêu thích của tớ là mật ong và tớ đại diện cho sự ấm áp nếu cậu thấy buồn thì hãy đến đây để tớ ôm một cái nhé',
        backgound: '#E3A97E',
        id:2
      },
      {
        img:gifAn ,
        content:' Hello, Tớ là An, tớ yêu quý mọi kiến thức mà tớ học được qua những quyển sách của thư viện và tớ đại diện cho sự thông minh Nếu thắc mắc gì cứ hỏi tớ',
        backgound: '#BCDAFF',
        id:3
      },
      {
        img:gifChom ,
        content:' Chào tớ là Chom,Tớ thích sự hoàn hảo tuy hơi khó tính nhưng rất yêu quý bạn bè và tớ đại diện kỉ luật mà nhớ đừng trêu tớ giận nha',
        backgound: '#FFD682',
        id:4
      }
  ]
 
  return (
    <div className='widget' key={id}>
        {list.map(list =>(
            list.id === id
             ? <WidgetRight
                    img={list.img}
                    key={list.id}
                    content={list.content}
                    backgound={list.backgound}
                />:""
        ))}
        <div className="widget-right">
            <ul className="widget-list">
                <li className={id === 1 ? "widget-item don" : "widget-item"} onClick={() => setId(1)} >
                    <img src={pgnDon} alt=""  />
                    <p>Don</p>
                </li>
                <li className={id === 2 ? "widget-item lin" : "widget-item"} onClick={() => setId(2)}>
                    <img src={pngLinh} alt="" />
                    <p>Lin</p>
                </li>
                <li className={id === 3 ? "widget-item an" : "widget-item"} onClick={() => setId(3)}>
                    <img src={pngAn} alt="" />
                    <p>An</p>
                </li>
                <li className={id === 4 ? "widget-item chom" : "widget-item"} onClick={() => setId(4)}>
                    <img src={pngChom} alt="" />
                    <p>Chom</p>
                </li>
            </ul>
        </div>

    </div>
  )
}
