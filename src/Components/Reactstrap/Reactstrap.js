import React,{useState} from 'react';
import {Alert,Badge,Button,Breadcrumb, BreadcrumbItem,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledCarousel} from 'reactstrap';

//react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Reactstrap=()=>{

    //Drop Down Button
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);


    //Uncontrolled Carousel
    const items = [
        {
          src: 'data:image/jpeg;base64,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',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header',
          key: '1'
        },
        {
          src: 'data:image/jpeg;base64,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',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src: 'data:image/png;base64,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',          
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
          key: '3'
        }
      ];
      

        return(
            <div>
                <h1 align="center" style={{backgroundColor:'blue'}}>Reactstrap</h1>
                <br/>
                <h2 align="center">Alerts</h2>
                <Alert color="primary">This is Primary Colour</Alert>
                <Alert color="secondary">This is Secondary Colour</Alert>
                <Alert color="dark">This is Dark Colour</Alert>
                <Alert color="danger">This is Danger Colour</Alert>
                <Alert color="warning">This is Warning Colour</Alert>
                <Alert color="info">This is Info Colour</Alert>
                <Alert color="light">This is Light Colour</Alert>
                <Alert color="success">This is Success Colour</Alert>
                <br/><br/>

                <h2 align="center">Badges</h2>
                <h1>Heading <Badge color="secondary">Omais</Badge></h1>
                <h2>Heading <Badge color="warning">Omais</Badge></h2>
                <h3>Heading <Badge color="success">Omais</Badge></h3>
                <h4>Heading <Badge color="info">Omais</Badge></h4>
                <h5>Heading <Badge color="danger">Omais</Badge></h5>
                <h6>Heading <Badge color="primary">Omais</Badge></h6>
                <br/>
                <Button color="primary" outline>
                 Notifications <Badge color="secondary">4</Badge>
                </Button>
                <br/><br/>
                <Badge color="primary">Primary</Badge>
      <Badge color="secondary" pill>Secondary</Badge>
      <Badge color="success" href="#">Success</Badge>
      <Badge color="danger" pill>Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
      <br/><br/><br/>

      <h2 align="center">Breadcrumbs</h2>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>

      <br/><br/>
      <h5>Breadcrum As Navbar</h5>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>

      <br/><br/><br/>


      <h2 align="center">ButtonDropdown</h2>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
      <DropdownToggle caret color="primary" size="lg">
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>

    <br/><br/><br/>


      <h2 align="center">Uncontrolled Carousel</h2>
      <UncontrolledCarousel items={items} />


      <br/><br/><br/>

      <h2 align="center">Carousel</h2>
      <Carousel autoPlay="true">
                <div>
                    <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>





 


                
                


                
                
                </div>
        )
    }


export default Reactstrap;