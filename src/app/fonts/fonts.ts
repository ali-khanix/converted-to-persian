import localFont from 'next/font/local'

export const iranYekan = localFont({
  src: [
    {
      path: './../fonts/iran_yekan/IRANYekanThinFaNum.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './../fonts/iran_yekan/IRANYekanLightFaNum.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './../fonts/iran_yekan/IRANYekanRegularFaNum.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/iran_yekan/IRANYekanMediumFaNum.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/iran_yekan/IRANYekanBoldFaNum.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../fonts/iran_yekan/IRANYekanBlackFaNum.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iran-yekan',
  display: 'swap',
})
