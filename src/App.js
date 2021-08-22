import React, { Component} from "react";
import "./App.css";
import Window from './components/window/Window'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        VIEWPORTHEIGHT : window.innerHeight,
        VIEWPORTWIDTH : window.innerWidth
    }
  }
  componentDidMount(){
    window.onresize = this.windowResize.bind(this);
  }

  //Change "desktop" size to match the current browser window
  windowResize(){
    this.setState({
      VIEWPORTHEIGHT : window.innerHeight,
      VIEWPORTWIDTH : window.innerWidth
    });
  }
  render(){
    //Set "desktop" to entire browser window size
    const appStyle = {
      height: this.state.VIEWPORTHEIGHT +1+ 'px',
      width: this.state.VIEWPORTWIDTH +1+ 'px'
    };
    return(
      <div className="App" style={appStyle}>
        <Window hasToolbar="true" title="Program Manager" isInactive={true}>
          <Window title="Main" isInactive={false}><p>
            
          orem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sed lorem in finibus. Curabitur tincidunt laoreet diam, at tristique erat gravida id. Nulla maximus diam lectus. Integer luctus euismod nibh. Vivamus eu justo vitae metus tristique eleifend. Nullam volutpat arcu diam. Quisque vehicula augue eu elit viverra scelerisque. Pellentesque cursus orci justo, sit amet luctus lorem mattis vitae. Nulla gravida odio in dolor convallis volutpat.

Etiam efficitur augue sit amet nibh aliquam lobortis. Donec commodo velit vitae orci pulvinar, non cursus eros elementum. Aliquam convallis lectus elit, ut laoreet enim dapibus pretium. In dolor erat, vestibulum a placerat quis, varius vitae mauris. In pharetra leo ligula, in mollis massa malesuada id. Quisque ut nunc sed sem fermentum luctus. Vestibulum et gravida risus. Nulla vulputate ipsum erat, vitae euismod leo aliquam sed. Sed imperdiet placerat justo, sed mollis magna blandit eget. Aenean at rhoncus diam, nec luctus ex. Sed dapibus eget sapien in cursus. Curabitur cursus egestas nisl, eu mollis tellus hendrerit a. Quisque aliquet ut sem id hendrerit. Ut ut scelerisque felis. Etiam eget dui mi.

Morbi sed turpis vitae sem ullamcorper pellentesque. Vivamus scelerisque neque ac imperdiet porttitor. Quisque vel convallis urna. Mauris erat nunc, faucibus eget mauris id, accumsan sollicitudin diam. Duis volutpat in quam quis dapibus. Integer eu sem iaculis nunc interdum commodo vitae eget sapien. Sed ut aliquam odio. Phasellus maximus dolor et sodales pellentesque. Proin porta dui et euismod maximus. Vivamus malesuada mollis convallis. Fusce in efficitur odio. Vivamus efficitur, felis a iaculis ultricies, urna velit varius metus, ac maximus risus arcu at arcu. Sed sed pulvinar purus, id consequat elit. Aenean egestas dapibus ligula, quis convallis orci lobortis id. Ut lectus lacus, blandit in ipsum eget, varius interdum purus. Mauris sit amet tempus augue.

Nunc non aliquam massa. Donec gravida vulputate ultricies. Quisque tristique, ipsum at elementum tempus, neque velit posuere est, vitae laoreet tortor libero non risus. Duis a dui mattis, bibendum erat nec, viverra quam. Aliquam ex mauris, aliquam in molestie quis, sodales ut sem. Vestibulum id pulvinar felis. In ultricies vel mauris vitae malesuada. Nunc vitae dolor libero.

Fusce consequat condimentum ex, eget bibendum sem. Pellentesque vitae maximus lorem. Cras fermentum egestas ipsum, et convallis nibh consectetur nec. Pellentesque vel nisl elit. Aliquam a ipsum sed sapien aliquam pharetra sed a mi. Curabitur in faucibus leo, et auctor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut turpis mi, commodo vel dui eget, egestas rutrum ipsum.

Fusce at massa eget eros iaculis congue ut vel tortor. Mauris et diam suscipit, egestas nisi sit amet, dapibus nunc. Nulla nec suscipit enim. Phasellus lorem leo, tincidunt at eros et, vestibulum vestibulum leo. Suspendisse rhoncus eget nibh sed vehicula. Duis sed tortor feugiat, luctus arcu sed, imperdiet ex. Nam non eros nec mi consectetur dapibus. Aenean vel orci placerat dui tincidunt malesuada ac eget nisl. Praesent ipsum odio, rutrum quis dolor a, euismod ullamcorper diam. Duis consectetur egestas volutpat. Proin tempus accumsan felis sed accumsan. Proin laoreet purus eu elementum ullamcorper.

Fusce eu ornare velit. Curabitur vel ligula mauris. Quisque interdum faucibus massa quis venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum auctor nunc et viverra imperdiet. Donec rhoncus accumsan felis, semper hendrerit massa euismod nec. Phasellus nec feugiat lacus, sed pellentesque orci. Aliquam convallis lacinia leo varius eleifend.

Integer lacinia consectetur leo, a venenatis velit eleifend ac. Nam porta urna at purus iaculis, non vehicula dui blandit. Curabitur odio turpis, consectetur ac lorem ut, ultricies condimentum purus. Morbi eros orci, pretium at eros dictum, consectetur gravida enim. Proin mollis orci bibendum purus rhoncus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi posuere vel odio quis aliquam. Cras venenatis scelerisque dapibus.

Proin orci odio, auctor hendrerit sagittis porta, elementum vel ex. Praesent facilisis et tortor in rhoncus. Cras sit amet magna ac tortor feugiat tincidunt in a sapien. Proin tristique nunc quis lacus imperdiet consequat. Nulla efficitur tortor leo, et lacinia mauris blandit non. Integer non lacus urna. Phasellus tincidunt scelerisque velit, placerat varius nisl condimentum quis. Aliquam elit mauris, consequat a commodo eleifend, eleifend et risus. Nullam nunc lectus, pulvinar in varius in, iaculis facilisis magna. Aliquam consectetur quam nunc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu imperdiet mauris, a porta justo. Sed eu lectus dignissim, pretium lacus at, maximus diam. Donec vitae ligula pharetra, vehicula magna nec, cursus dolor. Sed fermentum purus a est finibus, ac accumsan orci ultrices. Curabitur tortor dolor, lacinia non ligula id, dictum laoreet orci. Aliquam quis cursus ipsum. Proin ut turpis in felis aliquam sagittis.
            
            </p></Window>
        </Window>
        
      </div>
    );
  }
}

export default App;