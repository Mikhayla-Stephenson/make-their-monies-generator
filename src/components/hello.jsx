import { useState } from "react"
import {
  Progress,
  Button,
  Heading,
  Mark,
  useHighlight,
  Icon,
  Box,
  useToast,
} from "@chakra-ui/react"
import { FaSkull } from "react-icons/fa"

export default function Hello() {
  const toast = useToast()

  const [yearsWorked, setYearsWorked] = useState(0)
  const [alerted, setAlerted] = useState(false)

  const avgLifeSpan = 83
  const lives = Math.floor(yearsWorked / avgLifeSpan)
  let livesArray = []
  for (let i = 0; i < lives; i++) {
    livesArray.push(
      <Icon
        mr="0.5"
        as={FaSkull}
      />
    )
  }
  const billGatesMoney = 145757154000
  const averageAnnualIncome = 68250
  const progressBarTotal = 100000000

  const currentMoney = yearsWorked * averageAnnualIncome
  const bars = Math.floor(currentMoney / progressBarTotal)
  const numBars = Math.round(billGatesMoney / progressBarTotal)

  const chunks = useHighlight({
    text: "Bill Gates has $103 billion",
    query: ["$103 billion"],
  })
  const next = useHighlight({
    text: "The average Australian makes $68,250",
    query: ["$68,250"],
  })

  return (
    <Box mt="12">
      <Heading
        as="h1"
        size="xl"
        mb="3"
        fontFamily="NewYork"
      >
        {chunks.map(({ match, text }) => {
          if (!match) return text
          return text === "" ? (
            <Box
              key={text}
              as="u"
              fontFamily="NewYork"
            >
              {text}
            </Box>
          ) : (
            <Mark
              key={text}
              bg="black"
              color="white"
              fontFamily="NewYork"
              px="2"
              py="1"
            >
              {text}
            </Mark>
          )
        })}
      </Heading>
      <Heading
        as="h2"
        size="md"
        mb="10"
        fontFamily="NewYork"
      >
        {next.map(({ match, text }) => {
          if (!match) return text
          return text === "" ? (
            <Box
              key={text}
              as="u"
              fontFamily="NewYork"
            >
              {text}
            </Box>
          ) : (
            <Mark
              key={text}
              bg="yellow"
              color="black"
              fontFamily="NewYork"
              px="2"
              py="1"
            >
              {text}
            </Mark>
          )
        })}
      </Heading>
      <h2>Become a self made Billionaire</h2>
      <Button
        onClick={() => {
          setYearsWorked(yearsWorked + 1)
          if (yearsWorked === avgLifeSpan - 1) {
            toast({
              title: "You Died",
              description: "The average Australian lives 83 years",
              status: "error",
              duration: 2000,
              isClosable: true,
            })
          }
          if (bars === 1 && !alerted) {
            toast({
              title: "You earned you first $100 million!",
              description: "Only " + numBars + " more bars to go!",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
            setAlerted(true)
          }
        }}
        bgColor="white"
        colorScheme="black"
        variant="outline"
        mt="7"
      >
        Work
      </Button>
      <Heading
        as="h3"
        size="xl"
        my="6"
      >
        <Mark
          bg="yellow"
          color="black"
          fontFamily="NewYork"
          px="2"
          py="1"
        >
          ${currentMoney.toLocaleString("en-US")}
        </Mark>
      </Heading>
      <div style={{ textAlign: "right" }}>
        {bars} / {numBars.toLocaleString("en-US")}
      </div>
      <Progress
        colorScheme="gray"
        value={
          ((currentMoney - bars * progressBarTotal) / progressBarTotal) * 100
        }
      />
      <div>{yearsWorked} years spent</div>
      <Box mt="5">{livesArray}</Box>{" "}
    </Box>
  )
}
//68,250 avg
// 145,757,154,000
