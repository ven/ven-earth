export interface Component {
  type: string
  name: string
  href: string
}

export const ComponentData: Component[] = [
  {
    type: 'Case',
    name: 'NZXT H510 Elite',
    href: 'https://www.nzxt.com/products/h510-elite-matte-white',
  },
  {
    type: 'Motherboard',
    name: 'MSI MEG Z490 UNIFY',
    href: 'https://www.msi.com/Motherboard/MEG-Z490-UNIFY',
  },
  {
    type: 'PSU',
    name: 'Corsair RMx Series™ RM850x',
    href: 'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/RMx-Series/p/CP-9020180-UK',
  },
  {
    type: 'GPU',
    name: 'NVIDIA Geforce RTX 3080',
    href: 'https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3080/',
  },
  {
    type: 'CPU',
    name: 'Intel Core i9-10900K',
    href: 'https://ark.intel.com/content/www/us/en/ark/products/199332/intel-core-i9-10900k-processor-20m-cache-up-to-5-30-ghz.html',
  },
  {
    type: 'CPU Cooler',
    name: 'NZXT Kraken Z63',
    href: 'https://www.nzxt.com/products/kraken-z63',
  },
  {
    type: 'Memory',
    name: 'Corsair Vengeance RGB Pro 32GB DDR4-3600',
    href: 'https://www.corsair.com/uk/en/Categories/Products/Memory/Vengeance-PRO-RGB-Black/p/CMW32GX4M2D3600C18',
  },
  {
    type: 'Storage',
    name: 'Samsung 970 EVO Plus NVMe M.2 SSD 1TB',
    href: 'https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-1tb-mz-v7s1t0bw/',
  },
]
