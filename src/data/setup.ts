export interface Component {
  type: string
  name: string
  href: string
}

export const ComponentData: Component[] = [
  {
    type: 'Case',
    name: 'NZXT H9 Elite',
    href: 'https://nzxt.com/product/h9-elite',
  },
  {
    type: 'Motherboard',
    name: 'MSI MPG Z790 EDGE WIFI',
    href: 'https://www.msi.com/Motherboard/MPG-Z790-EDGE-WIFI',
  },
  {
    type: 'PSU',
    name: 'Corsair HX Series™ HX1200 — 1200W',
    href: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/hxi-series-2017-config/p/CP-9020140-UK',
  },
  {
    type: 'GPU',
    name: 'NVIDIA Geforce RTX 4090 Founders Edition',
    href: 'https://www.nvidia.com/en-gb/geforce/graphics-cards/40-series/rtx-4090/',
  },
  {
    type: 'CPU',
    name: 'Intel® Core™ i9-13900KS',
    href: 'https://www.intel.co.uk/content/www/uk/en/products/sku/232167/intel-core-i913900ks-processor-36m-cache-up-to-6-00-ghz/specifications.html',
  },
  {
    type: 'CPU Cooler',
    name: 'NZXT Kraken Z73 RGB',
    href: 'https://nzxt.com/en-GB/product/kraken-z73-rgb',
  },
  {
    type: 'Memory',
    name: 'Corsair Vengeance RGB 32GB DDR5-6200',
    href: 'https://www.corsair.com/uk/en/Categories/Products/Memory/VENGEANCE-RGB-DDR5-—-White/p/CMH32GX5M2B6200C36W',
  },
  {
    type: 'Storage',
    name: '4TB WD_BLACK SN850X NVMe™ SSD',
    href: 'https://www.westerndigital.com/en-gb/products/internal-drives/wd-black-sn850x-nvme-ssd#WDS400T2X0E',
  },
]
