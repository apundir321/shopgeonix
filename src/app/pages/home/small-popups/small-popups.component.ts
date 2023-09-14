import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'molla-small-popups',
  templateUrl: './small-popups.component.html',
  styleUrls: ['./small-popups.component.scss']
})
export class SmallPopupsComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  products = [
    {
      "productname": "Breakable SSD",
      "image": "./assets/images/pcategory/popup-images/BREAKABLE.png",
      "url": "https://geonix.in/shop/m2-breakable-ssd/3cols?category=14&page=1",
      "name": "Ankush",
      "place": "Gurgaon"
    },
    {
      "productname": "Laptop HDD",
      "image": "./assets/images/pcategory/popup-images/LAPTOP HDD.png",
      "url": "https://geonix.in/shop/laptop-hdd/3cols?category=3&page=1",
      "name": "Ashish",
      "place": "Noida"
    },
    {
      "productname": "Pc Monitor",
      "image": "./assets/images/pcategory/popup-images/PC MONITOR.png",
      "url": "https://geonix.in/shop/pc-monitor/3cols?category=11&page=1",
      "name": "Libin",
      "place": "Kerala"
    },
    {
      "productname": "SMPS",
      "image": "./assets/images/pcategory/popup-images/smps.png",
      "url": "https://geonix.in/shop/smps/3cols?category=22&page=1",
      "name": "Niladri",
      "place": "West Bengal"
    },
    {
      "productname": "Graphic Card",
      "image": "./assets/images/pcategory/popup-images/GRAPHIC CARD.png",
      "url": "https://geonix.in/shop/graphic-card/3cols?category=12&page=1",
      "name": "Rahul",
      "place": "Mumbai"
    },
    {
      "productname": "Laptop Adapter",
      "image": "./assets/images/pcategory/popup-images/LAPTOP ADAPTER.png",
      "url": "https://geonix.in/shop/keyboard-and-mouse/3cols?category=24&page=1",
      "name": "Priya",
      "place": "Delhi"
    },
    {
      "productname": "Keyboard & Mouse",
      "image": "./assets/images/pcategory/keyboard-mouse.jpeg",
      "url": "https://geonix.in/shop/keyboard-and-mouse/3cols?category=23&page=1",
      "name": "Arjun",
      "place": "Tamil Nadu"
    },
    {
      "productname": "Mothetboard",
      "image": "./assets/images/pcategory/motherboard.png",
      "url": "https://geonix.in/shop/motherboard/3cols?category=13&page=1",
      "name": "Krishna",
      "place": "Andhra Pradesh"
    },
    {
      "productname": "Printer Toner",
      "image": "./assets/images/pcategory/2365 PRINTER.png",
      "url": "https://geonix.in/shop/printer-toner/3cols?category=15&page=1",
      "name": "Anannya",
      "place": "Uttar Pradesh"
    },
    {
      "productname": "PCI Card",
      "image": "./assets/images/pcategory/pci.png",
      "url": "https://geonix.in/shop/pci-card/3cols?category=17&page=1",
      "name": "Ishan",
      "place": "Rajasthan"
    },
    {
      "productname": "WIFI USB ADAPTER",
      "image": "./assets/images/pcategory/WIFI ADAPTER PNG.png",
      "url": "https://geonix.in/shop/usb-adapter/3cols?category=10&page=1",
      "name": "Aditya",
      "place": "Kerala"
    },
    {
      "productname": "Riser Card",
      "image": "./assets/images/pcategory/WIFI ADAPTER PNG.png",
      "url": "https://geonix.in/shop/riser-card/3cols?category=5&page=1",
      "name": "Vivaan",
      "place": "Bihar"
    },
    {
      "productname": "Desktop HDD",
      "image": "./assets/images/pcategory/desktophdd.png",
      "url": "https://geonix.in/shop/desktop-hdd/3cols?category=2&page=1",
      "name": "Ramesh",
      "place": "Mumbai"
    },
    {
      "productname": "Desktop Ram",
      "image": "./assets/images/pcategory/desktopram.png",
      "url": "https://geonix.in/shop/desktop-ram/3cols?category=1&page=1",
      "name": "Rohan",
      "place": "Himachal Pradesh"
    },
    {
      "productname": "Laptop Ram",
      "image": "./assets/images/pcategory/laptopram.png",
      "url": "https://geonix.in/shop/laptop-ram/3cols?category=4&page=1",
      "name": "Pranav",
      "place": "Arunachal Pradesh"
    },
    {
      "productname": "SATA SSD",
      "image": "./assets/images/pcategory/popup-images/LAPTOP ADAPTER.png",
      "url": "https://geonix.in/shop/keyboard-and-mouse/3cols?category=24&page=1",
      "name": "Ishani",
      "place": "Punjab"
    },
    {
      "productname": "M SATA SSD",
      "image": "./assets/images/pcategory/M SATA.png",
      "url": "https://geonix.in/shop/m-sata-ssd/3cols?category=16&page=1",
      "name": "Arjun",
      "place": "Gujarat"
    },
    {
      "productname": "SSD ENCLOSURE",
      "image": "./assets/images/pcategory/ecclouser.png",
      "url": "https://geonix.in/shop/ssd-enclosure/3cols?category=18&page=1",
      "name": "Veer",
      "place": "Assam"
    },
    {
      "productname": "NVME SSD",
      "image": "./assets/images/pcategory/NVME SSD FRONT PNG.png",
      "url": "https://geonix.in/shop/nvme-ssd/3cols?category=8&page=1",
      "name": "Rahul",
      "place": "Delhi"
    },
    {
      "productname": "M.2 SSD",
      "image": "./assets/images/pcategory/m.2 ssd.png",
      "url": "https://geonix.in/shop/m2-ssd/3cols?category=7&page=1",
      "name": "Riya",
      "place": "Chhattisgarh"
    },
  ]



  random;
  data;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.runWithDelay();
    // }, 5000);
    this.runWithDelay();
  }

  runWithDelay() {

    // Use a loop to iterate through the data array
    for (let i = 0; i < this.products.length; i++) {
      setTimeout(() => {
        this.random = Math.floor(Math.random() * this.products.length);
        this.data = this.products[this.random]
        console.log(this.data);
        console.log(i);
        // Add your code here to execute with a delay
      }, i * 10000); // Delay in milliseconds (i * 1000 ms for increasing delay)
    }
  }

}
