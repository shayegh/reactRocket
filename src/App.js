import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';

// import logo from './logo.svg';
import './styles/App.css';
import './styles/primeflex.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

//AntDesign 
import 'antd/dist/antd.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      items: [
        {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark'
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video'
                },

              ]
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }
          ]
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            },

          ]
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus',

            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus',

            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                    {
                      label: 'Print',
                      icon: 'pi pi-fw pi-print'
                    }
                  ]
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
                }
              ]
            }
          ]
        },
        {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus'
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        }
      ]
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }


  render() {
    return (
      <div className="p-grid sample-layout">
        <div className="p-col-12 p-md-2">
          <PanelMenu model={this.state.items} style={{ width: '300px' }} />
        </div>
        <div className="p-col-12 p-md-10 p-col-nogutter">
          <div className="p-col-12 p-col-nogutter">
            Top Bar
          </div>
          <div className="p-col-12">
            <div className="p-grid">
              <div className="p-col-12 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec
                  dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh.
                                        In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
              <div className="p-col-12 p-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis
                  tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh
                  at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique
                                        nulla nec, rutrum sapien.</div>
              <div className="p-col-12 p-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis
                  sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis.
                  Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis,
                                        condimentum eget hendrerit sit amet.</div>

              <div className="p-col-6 p-md-3"><img alt="Galleria 1" src="showcase/resources/demo/images/galleria/galleria1.jpg" style={{ width: '100%' }} /></div>
              <div className="p-col-6 p-md-3"><img alt="Galleria 2" src="showcase/resources/demo/images/galleria/galleria2.jpg" style={{ width: '100%' }} /></div>
              <div className="p-col-6 p-md-3"><img alt="Galleria 3" src="showcase/resources/demo/images/galleria/galleria3.jpg" style={{ width: '100%' }} /></div>
              <div className="p-col-6 p-md-3"><img alt="Galleria 4" src="showcase/resources/demo/images/galleria/galleria4.jpg" style={{ width: '100%' }} /></div>

              <div className="p-col-12 p-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                  facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                                        neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
              <div className="p-col-12 p-md-6">
                <Button label="Click" icon="pi pi-check" onClick={this.increment} />

                <p>Number of Clicks: {this.state.count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-12">
          Footer
        </div>
      </div>


    );
  }
}

export default App;
