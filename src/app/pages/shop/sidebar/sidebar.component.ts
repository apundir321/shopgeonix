import { Component, OnInit, HostListener,Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MasterService } from 'src/app/shared/services/master.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'shop-sidebar-page',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})

export class SidebarPageComponent implements OnInit {
	categoryImage:string;
	FilterProd:any;
	products = [];
	perPage = 10;
	type = 'list';
	productList:any
	newObject:any=[]
	allproducts:any
	totalCount = 1;
	orderBy = 'default';
	pageTitle = 'List';
	toggle = false;
	searchTerm = '';
	loaded = false;
	firstLoad = false;
	lenth1:any
	pageNo = 1;

	constructor(public activeRoute: ActivatedRoute, 
		public router: Router, 
		public utilsService: UtilsService, 
		public apiService: ApiService,
		private masterService:MasterService,
		private titleservice: Title,
		private meta: Meta
		) {
		this.activeRoute.params.subscribe(params => {
			this.type = params['type'];

			if (this.type == 'list') {
				this.pageTitle = 'List';
			} else if (this.type == '2cols') {
				this.pageTitle = 'Grid 2 Columns';
			} else if (this.type == '3cols') {
				this.pageTitle = 'Grid 3 Columns';
			} else if (this.type == '4cols') {
				this.pageTitle = 'Grid 4 Columns';
			}
		});
		
		this.activeRoute.queryParams.subscribe(params => {
			this.loaded = false;
			

			if (params['searchTerm']) {
				this.searchTerm = params['searchTerm'];
				let data = {"key":this.searchTerm}
				console.log("rohtash",data)
				this.masterService.fetchHeaderSearchData(this.searchTerm,data).subscribe(result => {
					console.log("query response",result);
					this.products = result;
					this.allproducts = result;
					this.totalCount = result?.totalPage;
					console.log("product",this.products);
					this.titleservice.setTitle(this.products[0].category.name)
					this.loaded = true;
					if (!this.firstLoad) {
						this.firstLoad = true;
					}
					this.utilsService.scrollToPageContent();
				})
			} else {
				this.searchTerm = '';
			}

			if (params['page']) {
				console.log("pageno",params.page)
				this.pageNo = params.page;
				this.apiService.fetchShopData(params, this.pageNo).subscribe(result => {
					let coverImage = result.data[0].category.coverImage;
					console.log("coverimage = "+coverImage)
					this.categoryImage = coverImage;
					this.products = result.data;
					this.allproducts = result
					this.totalCount = result.totalPage;
					console.log(this.totalCount)
					console.log("product",this.products)
					console.log('fazil console is here', this.products[0].category.name);
					this.titleservice.setTitle(this.products[0].category.name)

					// dynamic title and meta tag code start 

						switch (this.products[0].category.name) {
							case "SSD M.2":
								this.titleservice.setTitle('Best M2 SSD ')
								this.meta.updateTag({name: 'description', content: 'Our comprehensive guide showcases the top-rated M.2 SSDs for high- performance.'})
								this.meta.updateTag({name: 'keyword', content: 'ssd m.2 256gb price, ssd m.2 512gb price, geonix 1 tb M.2 SSD price'})
								break;
							case "M SATA":
								this.titleservice.setTitle('ssd sata')
								break;
							case "External SSD SATA":
								this.titleservice.setTitle("External Sata SSD")
								this.meta.updateTag({name: 'description', content: 'Boost your productivity and enjoy rapid access to your files with our External SATA SSD.'})
								this.meta.updateTag({name: 'keyword', content: 'external sata ssd drive price, Geonix external sata ssd, ssd external hard drive 1tb'})
								break;
							case "SSD M.2 BREAKABLE":
								this.titleservice.setTitle("Breakable SSD")
								this.meta.updateTag({name: 'description', content: 'Discover M2 Breakable SSD with lightning-fast speed.'})
								this.meta.updateTag({name: 'keyword', content: 'm 2 ssd breakable price, geonix m.2 ssd price, m 2 ssd 256gb, M 2 breakable ssd in india'})
								break;
							case "External SSD M.2":
								this.titleservice.setTitle("External SSD M.2")
								break;
							case "Printer Tonner":
								this.titleservice.setTitle("printer toner cartridge")
								this.meta.updateTag({name: 'description', content: 'Discover high-quality printer toner cartridges for superior printing performance.'})
								this.meta.updateTag({name: 'keyword', content: 'laser printer toner cartridge price, geonix printer cartridge price'})
								break;
							case "SSD NVMe":
								this.titleservice.setTitle("High-Performance NVMe SSD")
								this.meta.updateTag({name: 'description', content: 'Experience lightning-fast storage performance with an NVMe SSD.'})
								this.meta.updateTag({name: 'keyword', content: 'NVMe SSD, 256 nvme ssd drive price, nvme solid state drive price, nvme ssd 1tb price in india'})
								break;
							case "SSD Enclosure":
								this.titleservice.setTitle("Enclosure SSD")
								this.meta.updateTag({name: 'description', content: 'Enclosure SSD provides a compact and portable solution for storing.'})
								this.meta.updateTag({name: 'keyword', content: 'ssd enclosure price, nvme ssd enclosure usb, sata ssd enclosure price'})
								break;
							case "Laptop RAM":
								this.titleservice.setTitle("Best Laptop Ram")
								this.meta.updateTag({name: 'description', content: 'Geonix is the best Laptop Ram Brand in India known for its High-Speed performance.'})
								this.meta.updateTag({name: 'keyword', content: '8gb ddr4 ram price for laptop, 4gb ddr4 laptop ram price, best laptop ram brand in india, laptop ram price 16gb, Geonix laptop RAM'})
								break;
							case "Desktop RAM":
								this.titleservice.setTitle("High-Performance Desktop Ram |5Yr Warranty")
								this.meta.updateTag({name: 'description', content: 'Geonix Desktop Ram is the best desktop Ram brand in India for High - performance.'})
								this.meta.updateTag({name: 'keyword', content: 'Geonix 4gb ddr4 ram price, 4gb ddr3 1600mhz ram for desktop, best desktop ram brand in India, 8gb ddr3 1333mhz desktop ram Price, Geonix 8gb ddr3 1600mhz ram for desktop, 8gb ddr4 2666mhz desktop ram'})
								break;
							case "Graphic Card":
								this.titleservice.setTitle("Gaming Gaphic Card")
								this.meta.updateTag({name: 'description', content: 'Discover the best graphic card for editing videos and images - Geonix Graphic Card.'})
								this.meta.updateTag({name: 'keyword', content: 'best graphics card for gaming pc, nvidia geforce 4gb graphics card price, 4gb graphics card price, 2gb graphics card price for pc, 1gb graphics card ddr3 price, geonix graphics card price'})
								break;
							case "Geonix SSD":
								this.titleservice.setTitle("SDD Gold |Sata SSD Drive")
								this.meta.updateTag({name: 'description', content: 'Our Gold SSD is the best SSD brand in India for high-speed performance.'})
								this.meta.updateTag({name: 'keyword', content: 'best ssd brand in India, 128 gb ssd price for PC laptop, geonix ssd 512gb price, 1tb ssd hard disk price, sata ssd price in india, solid state hard drive Price'})
								break;
							case "Motherboard":
								this.titleservice.setTitle("High - Speed Motherbroad")
								this.meta.updateTag({name: 'description', content: 'Upgrade your PC Motherboard to experience lightning-fast speed.'})
								this.meta.updateTag({name: 'keyword', content: 'computer motherboard price, Geonix Motherboard price, gaming motherboard price'})
								break;
							case "Laptop HDD":
								this.titleservice.setTitle("Laptop Hard Drive")
								this.meta.updateTag({name: 'description', content: 'Geonix Laptop Hard Drive Price is the most reasonable. Lowest price since launch.'})
								this.meta.updateTag({name: 'keyword', content: '1tb internal hard disk price for laptop, Geonix Laptop Hard Drive Price, sata laptop hard drive, hard disk cost for laptop, 500Gb Laptop Hard disk price'})
								break;
							case "Riser Card":
								this.titleservice.setTitle("Best Riser Card")
								this.meta.updateTag({name: 'description', content: 'Discover the best PCI riser for mining with our top-rated selection of riser cards.'})
								this.meta.updateTag({name: 'keyword', content: 'riser card pcie x16 price'})
								break;
							case "Monitors":
								this.titleservice.setTitle("Best PC Monitor")
								this.meta.updateTag({name: 'description', content: 'Experience a whole new world with our TFT PC Monitor.'})
								this.meta.updateTag({name: 'keyword', content: 'computer monitor price, computer tft monitor 24 inch, gaming monitor price, 18.5 inch pc monitor price, Led Monitors 19.5 inch price, geonix pc Monitors price'})
								break;
							case "HDD – Hard Disk Drive":
								this.titleservice.setTitle("Geonix Hard Disk |Surveillance Hard Drive")
								this.meta.updateTag({name: 'description', content: 'Upgrade your desktop with Best Internal hard drives Brand-Geonix. Lowest price since launch.'})
								this.meta.updateTag({name: 'keyword', content: 'Geonix desktop hdd price, Best internal hard drives Brand, 2tb internal hard drive, 4tb internal hard drive, gaming pc hard drive, 8tb internal hard drive, best surveillance hard drive '})
								break;
							case "PCI CARDS":
								this.titleservice.setTitle("PCI Card")
								this.meta.updateTag({name: "description', content: 'Explore our high-performance PCI cards designed to enhance your computer's capabilities."})
								this.meta.updateTag({name: 'keyword', content: 'Pci Soundcard price, geonix pci express usb 3.0 card'})
								break;
							case "Wifi":
								this.titleservice.setTitle("Fastest Wifi Dongle")
								this.meta.updateTag({name: 'description', content: 'Discover the fastest WiFi dongle for lightning-fast wireless internet connections.'})
								this.meta.updateTag({name: 'keyword', content: 'wifi dongle for pc price, geonix wireless wifi adapter price, wireless wifi adapter for pc'})
								break;
							case "External SSD NVME":
								this.titleservice.setTitle("Best External SSD NVME ")
								this.meta.updateTag({name: 'description', content: 'Experience unparalleled speed for your data transfers, and multimedia needs.'})
								this.meta.updateTag({name: 'keyword', content: 'external nvme ssd  drive, 1tb external ssd Nvme hard drive, geonix external nvme ssd price'})
								break;
							case "External SSD NVME":
								this.titleservice.setTitle("Keyboard Mouse")
								this.meta.updateTag({name: 'description', content: 'Upgrade your home office with our keyboard and mouse combo'})
								this.meta.updateTag({name: 'keyword', content: 'wireless keyboard mouse, keyboard and mouse combo, best bluetooth keyboard and mouse, bluetooth keyboard mouse combo'})
								break;
							case "External SSD NVME":
								this.titleservice.setTitle("Laptop Adapter")
								this.meta.updateTag({name: 'description', content: 'With our laptop adapter, charge your beast instantly and upgrade your productivity.'})
								this.meta.updateTag({name: 'keyword', content: 'laptop charger adapter, laptop power adapter, usb laptop charger price, usb adapter for laptop, notebook power adapter price, laptop charger cable type-c, laptop adapter power cable price'})
								break;
						
							default:
								break;
								this.titleservice.setTitle("Geonix")
						}

					// dynamic title and meta tag code end 

					// console.log("products-cat",this.products[0]['category']['coverImage'])
					this.loaded = true;
					if (!this.firstLoad) {
						this.firstLoad = true;
					}
					this.utilsService.scrollToPageContent();
				})
			} else {
				this.orderBy = 'default';
			}

			
		})
	}

	ngOnInit(): void {
		if (window.innerWidth > 991) this.toggle = false;
		else this.toggle = true;
		// this.getid()
	}

	getid(){
		this.masterService.getMethod("/product/menu").subscribe(res=>{
			this.productList=res
			var i=1
			for (const [key, value] of Object.entries(this.productList)) {
				const len=Object.keys(value).length
				this.newObject.push({
					id:i,
					name:key,
					value:len
				});
				i+=1
			}
		})
	}


	@HostListener('window: resize', ['$event'])
	onResize(event: Event) {
		if (window.innerWidth > 991) this.toggle = false;
		else this.toggle = true;
	}

	changeOrderBy(event: any) {
		this.router.navigate([], { queryParams: { orderBy: event.currentTarget.value, page: 1 }, queryParamsHandling: 'merge' });
	}

	toggleSidebar() {
		if (document.querySelector('body').classList.contains('sidebar-filter-active'))
			document.querySelector('body').classList.remove('sidebar-filter-active');
		else
			document.querySelector('body').classList.add('sidebar-filter-active');
	}


	hideSidebar() {
		document.querySelector('body').classList.remove('sidebar-filter-active');
	}

	value1(event:any){
		console.log("hi totalpages",event.totalPage)
		this.lenth1=event.prducts
		this.totalCount = event.totalPage
		this.totalCount = event.totalPage

		// location.reload();
	}

	onVoted(res:any){
		console.log("listner filter kaushal",res['data'] )
		this.products = res.data;
		console.log()
	}

	onVoted2(e:any){
		console.log("llisten fron gaurav",e)
		this.products = e;
	}
}
