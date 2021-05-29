import { Box, Flex, SimpleGrid, Text, theme, useBreakpointValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { Header } from '../components/Header'
import { SearchBox } from '../components/Header/SearchBox'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import ('react-apexcharts'), {
  ssr: false,
})

const options = {
  colors: [theme.colors.pink[500]],
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show:false,
  },
  
  dataLabels: {
    enabled: false,
  },

  stroke: {
    curve: 'smooth'
  },

  tooltip: {
    enabled: false,
  },

  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    }, 
    categories: [
      '2021-05-18T00:00:00.000Z',
      '2021-05-19T00:00:00.000Z',
      '2021-05-20T00:00:00.000Z',
      '2021-05-21T00:00:00.000Z',
      '2021-05-22T00:00:00.000Z',
      '2021-05-23T00:00:00.000Z',
      '2021-05-24T00:00:00.000Z',
    ],
  },
  fill: {
    colors: [theme.colors.pink[500]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
]

export default function Dashboard() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />
        
        <Box flex="1" flexDirection="column">
          {!isWideVersion && <SearchBox marginY="4"/>}
          
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
           <Box
              padding= {isWideVersion ? "8" : "6"}
              backgroundColor="gray.800"
              borderRadius={8}
              paddingBottom="4"
            >
              <Text fontSize="lg" marginBottom="4">Inscritos da semana</Text>

              <Chart options={options} series={series} type="area" height={160} />
            </Box>

           <Box
              padding={isWideVersion ? "8" : "6"}
              backgroundColor="gray.800"
              borderRadius={8}
              paddingBottom="4"
            >
              <Text fontSize="lg" marginBottom="4">Taxa de Abertura</Text>
              <Chart options={options} series={series} type="area" height={160} />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}