"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Lock } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "PageoNix",
      category: "web",
      description:
        "A modern no-code platform for creating dynamic, responsive web pages with drag-and-drop builder.",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      links: {
        website: "https://pageonix.in",
        github: "https://github.com",
      },
      isPrivate: false,
    },
    {
      title: "Kuber Mail",
      category: "web",
      description:
        "Email-driven payment gateway enabling businesses to accept UPI payments without bank integration.",
      tags: ["Flask", "Python", "UPI", "Email"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
      links: {
        github: "https://github.com/DevLord-Avijit/kuber-mail",
      },
      isPrivate: false,
    },
    {
      title: "Mark AI",
      category: "ai",
      description:
        "Intelligent virtual assistant designed to automate tasks and provide AI-powered interactions.",
      tags: ["AI", "Automation", "ChatBot"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      links: {
        website: "https://mark.avijitsingh.ct.ws",
      },
      isPrivate: true,
    },
    {
      title: "Key-Miners",
      category: "python",
      description:
        "Toolkit to scrape, mine, verify, and store API keys from public GitHub repositories for research.",
      tags: ["Python", "Scraping", "Security"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      links: {
        github: "https://github.com/DevLord-Avijit/key-miners",
      },
      isPrivate: false,
    },
    {
      title: "To-Do List",
      category: "python",
      description:
        "Simple task management app with persistent storage and real-time updates.",
      tags: ["Flask", "Python", "SQLite"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      links: {
        website: "https://tasks.avijitsingh.ct.ws/",
        github: "https://github.com/DevLord-Avijit/To-do-list",
      },
      isPrivate: false,
    },
    {
      title: "WhatsApp Automater",
      category: "python",
      description:
        "Automation tool to streamline WhatsApp communications using pyautogui.",
      tags: ["Python", "PyAutoGUI", "Automation"],
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJEA8wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABIEAABAwIEAgYHBAcGBAcAAAABAAIDBBEFEiExBkETUWFxgZEHFCIyobHBI0JSczM0NXKy0fAVNnSCkuEkY8LxFiVEVGKDlP/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAAvEQACAgECBAQFBAMBAAAAAAAAAQIDEQQxBRIhQRMyUXEUYYGRoSLB0fBCUrEj/9oADAMBAAIRAxEAPwDcUIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCE2xCpjo6Oeql9yGN0ju4C6JZeDDaSyyE4o4pp8EPQsZ09Y4XbGDsO3+So1VxVj9U5zhWerxu2ZGNvEC/xKiXzS1U8tVUEOnndmeT1nl4KVL6TAqCGprIG1VfVNzwU8h+zjj5PeOd7aBd6Vel4fR4lyyzy1msv1drUJcsUNG4zjTHBzMVqMw/FI9w8i5TWF8cYlRuAxJrayG+r2DK8f1/RCQqcS4vp4nTVOFRmkaLmN1IwsaO22tk2nZR4rhj8TwyEwSQkCrpQ4kNv7r2dirafiOj1lngzr5W9shx1NH6oTba7Pp/OTUcLxGlxSjZVUkokifpfmD1FPRsso4NxJ2F47EzMBTVbhHMw7Bx91w7b2Hj2LVxsqmr0z09vL27Hd0OrWqq5+/c9QhCql0EIQgBCEIAQhCAEIQgBCEIAQuXKp43xgKKp9XoqYVDs+TO59gHc/671pOcYLMmRW3QqWZstyFUqDGccq2Oljp6V8d9NC3yu7VO/wC1cZZ72Fsf+7KB9StVdF9ev2NFqYNZSePZliQq+MerWj7bB5h15H5vovRxIG/pMMrW/wD1hPGgZ+Ir7v8ADJ9CgBxTQA/aMqIz1Oj2SrOJsJf/AOoc3sMbv5LPi1+pn4ir/ZE0hNaOtp6xhfSytkaNyNwnF/Jbpp7EqaayjpCpeN+kCiopn0+Hwmtka7K5weGsB6r8yop3HePRx9O/BWdB+PK8C3fst1FscyNJUJxlccNYjb70WU9xIB+BURgXH1DXzspq6F9FNIbML3ZmOPVfkrNidIyuoKilfa00ZbfqNtD5rMHyTTZrYueDS7oxc+4bb3TrjprhxFI7XozBCYP3Mg+uZFfRyUFS6KZhGvskjw1+R7QpzHsIoqoYfBVYzTU7qalEWXIZXdJucxGzeWuy6XH6paqmHhdXnPQ8jo65RVkJdMY36evQkJoYjxdXiOhro6iaJ7DXOcTA0GLci1rDbfcKq8FZicYc79CMMkDrdZIy+O9k7fgmLSxubUcT0rqY6OL697wR+7z7lxUT0VDh7sLwhzpGPdmqql7cpmI2A6mhcXQ6G+/UxfI0k8tl/U3xiueXTf65/u5Gxlwczo/eDgWd/L6LcW7BZJwvh/r+JAO9xlge0nQfAOd/lWtt1aCu5xicZWxiuyJuBVyjTKb2b/4eoQhcg7gIQhACEIQAhCEAIQhAJyvLBmtcc120gtuNig21vzXDGCP3NiUB2d1kdfYVsJ6pnk/6XLV2PMkjre63TxWU1v67D+c7+FypavscviW0fqX7CmtZhlKGbdE0+YTpNcL/AGbS/kt+SdK3Dyov1+Rex4vV4vVsbgUm+ON4+0jY4H8QCRqsQo6OVkdTUMifN7rSLl3gncQbIwPYQ5p2IOiYGEyLooY6PiZjIGtjjmgJe1uxIP8AsmXpKxSWkwyKhp3OY6sc7pHN36Ntrgd5cB3XUm5tuKqP/DO+ZVb9KcDzU0VRl9jIWX6jutaF+pr5kFS5VJL1/gZ8MYfHSUtFPHFG+vrXEUvSC7IWDTNbrPLu83dZiuJ0NdLDLWyGWN2W17t8u5R09U8YJg1dA8RvhD4ByOZrrgjrH1TttXgGIyurMRnno5nNJlYxt2ud+JpAPl1/GpqJylY1nDRztTZKVjgpYa+eFgjuJaOmrMPbilPC2ImToqqJos3MRcPHVf5q7+j/ABGXEOHIm1Ds89K8073Hc2ALb9uVzb9qpuIn1Phh7Hkh9fO10THaHom3s63K5KsnouiezBquQtLekqiW3G/sM1+ngrlblKlOW50dNKUoRct8Ezj2BQYo1123eRqM1tbWuDY2dtyIIFiDoRRq3hWsjlyUhbKeUUlo5O2wOju9pK1MbLmWOOVhZKxr2HdrhcFW9PrLqOkX09GR6rQUanrNdfVGOvwXFWPyOwyrHVaBxHmAntHwxXySM9caKONx0z6vd+6wakrTRQU33GFg/DG8tHkDZKQ08MJJihZGTuWtAJ8Vcnxe6SwkkUYcDojLMpNooEGBYhg2IsrcOqoI3MBBirR0eZpt7NwC0nQag+Su+E1jqylzvj6OQaOaA4tB7CQL+Fx2lPhsuTuufdfO55nv6nTo00KFiG3oV7jLjDDeE6D1qvLpXFwaKeFzOlIN9bEjRTtDP61RQVAjfH0sbX5JPebcXse1Ybxlg3D9bVzuhfI3FK7EHxxVTuleXkTBrwGnR2UEt02ygXV/4BixLBOEsPw/EHA1EQddp1yAuLg2+2gIGmgtpooItSRalFxL0hNqKpFSwkizm7hOVk1BCEIAQhCAEIQgOGyNdfKbrlkjS4sIs4bhcOfCHWDST2BKDX2g3/UgPQLaLJq39dh/Of8AwuWsjVx7lk1b+vRfnP8A4XKlq+31OXxLaP1L9hX7MpfyW/JOrJvhLL4ZSn/kt+Sehjeatw8qOhWv0L2E2tuuxHqlAANAqD6SOO5OHJ4aDD4XSTub0lRMzXoGHQeJ+A71ulk32OPSTQyCqoZ+lY0VEzaePW7iSD7Abub3vprpprZWbhKknw3BmU9XIXv6R7gSCLAnbXXzsVk05djtVSTVEzqqZpEkEks3uE2IIN9NRfyVtwPF8VwbFqalxWSSSmqHZSJJM+W9hdrt9CRp1LfkxHBHHCZcTm/8T0d9zTuPzUbx1PLXU/8AZ+HUE1TMDeSXJaOIb6uOlzYfXS4UpJ/eijOv6u7cd6WxOtw3DngugifUZwMjWjNfe6rQkott+pHGUYqbk8df2RQqjEMXwTD6WnOH0zYIActT0YmBzG7hmuQLncbptHxA10rRS4Fhpqz7pZE51j2NudVqUApq+BlWwH2x7zHFpPYSCLrsUUXPpD2dI6x7xexU2YS6tEjrjPD3M4ouHsWxyv8AWcZ6RpNi9rj7Vuoj7o7NzyHNaVQUsdDSRU0IAZGLABKxMZGwMjYGNGzWiwXaNtkiWAQheFYMmd+lbijibh91K3huijmidE91TN0LpTFa1tjYaEnX6FVv0O8fY7xFxTVUGO14qIZKV0kLeiYzK9rm6DKByJ8lcuP62lwWnfXV8xhgmIYH5S727baAkbb28QsI9H+ORYT6QqPEpM5p3TyNfl3c14cBz11cCsVSlPmTWxJOEYxTT3Pq0KucWcTU2DRPgY8urZGWjayx6MkaOdfQD5qKxP0g0jYnswynlkmOzpQGtb273Pdos7nqZa2eapneXve8lzzzKlhHrllebysIiOHqOePiOtxbFI3Pna98kUhblDpXOP2luy5I03I6lfsI4rFO3oK9skzR7krbOI8OarBeJBYG4C4urdjr5XCC6Prnv7FSqFjkrLH1Sxhbe5sXDtXBW5pqSUSR5bEtvob7EcipVr8ji+R3ve63sWT8E4qcLxuIPdaCpIilB212PgefVday6pYNhcqlNYZeTyKRSCQG2yUTZlUCbOFh1pw0hwu03C1MnqEIQAhCEAxhxCJ5s8ZL7E7JzJI1jM3XsoItB1bv1HTyXcc8kXs2u38J5LOASbal2YZmg36uSzCut68y17dO7f8AdctHicHC7dr81nNZ+uR/nu/hcqOs7fU5fEto/U0PCP2VSfkt+SdnTVMsJIGFUdt+hZ8k7DS7U7q3Dyo6NfkXsN8RroqChqK2ocWQU8T5ZH9TWi5+AK+ZKqsqMfx2bES50ddUy9IQ5wcADbQaDRrdLcwD47X6ZK+Wi4Q9Wp43Pkrp2QkNjz2YPadcdXsgeKyHhakM734g+HKYnGIOa3KwvsCewEDfsIU8EJPsWCONkTGwxtAYxga1o5Db4aqWxOuFVT4cQ688LXNfyv7tj42UYRck+15kJzhuHz4jWx01LG58jzYHcNHMnsCkZoWDFPSbg7JqfFKLPVTCnkAp7FuV4BJDnWtYdYuDfRc8EYzJ6Q8Sr5a2GKjdStiL2xEuEgdmHPb3FXKb0T4h/adLh8+LU8bbulbNCxxNtPum1jdvWd+xbHwvw1hvDGHmlwyGxec0sjrZ5XdZtp4CwHJVHCuSa36mnhQsyn16/kloI2QwsjjblY0WA6glF4Nl6tiyCEIQAhCEBDcV8PUfFGDT4ViD5WQylpzQuAc0ggi1wRuOpZ9UehmgoZmVGCyGVzCHAVshuCOYIFu3Za0hZUmjDRlEfAWNl9nCmAGmYy6Dt2VWEZhHRuIJbobbXW/PNhfqWA3ze116qaEnLc0awA7rL23gCF4F6d/Fbs1PGhzGta7fKLHr6j4jVbHhNV69hlLU85Iml3fbX43WYYxT9HTYVLazZ6Ua9ocQfhZXrgWZ8nDcTL3ayR4B8b/VRWbZNo7k+ntL+iTSOPOQ0eKkGiwAHJREh6hCEAIQhAQdTRywakZ2c3JOPNL7Lhm6jzClDUSEWytPWkBYaAW7kAgynfE+4drzas9rjesi/PP8LlpliS0t8VmeIWFZFb/3Lv4XKnrOxy+JbR+pomDfsmj/ACW/JPE0wf8AZVJ+S35Jy5wGg3VqHlR0avIvYzL02YHiOMDBXUPRSMjfIx0TpA0guy2frplGWxN9Mw6ypHBsOpuHeDKLDcXMc1XNKJ5mMb0hecwvrzswBt+xTnElDUVksD42Oe0McHZSNNRbTzUFxGyOgqKMSPDP+FyuZmuQb6762uVDZdYspLYp3X2wcsR2wZjiGGcQmrqHipihifI5zGMkNmgkkAC2gCtXo4xCbh71pmLTSTCaVjgY7yEtsQRrYixDSLdbkliNdHUexCQ9gN3PFrc9Ljv8PFP+G4yyGvntZzILAd91aqlKdeZrqSUTnOKclhmgxua/iWjewgtdTEgjbmrIq1C0M4ioWDZtMW+VwrKoYby9yWneXv8AsgQhCkJgQheG255ID1CTbLG51mvaT1ZtfJKIAQhCAQqyPV5b/hPNYnjPD1PQ4jJA2eslZYODn1Bba/L2co81s2Kvy0pb+JwH1+izbjJlsTjfp7cIAt1gldHhkYyvxJZ6HL4vOcNNzQeOpVm4bTNPs9N/+iQ/9SUbSNbfLLIwHS7jmt267+aUGZkoab5XatJ5diUF9RzOngvQPTUyXlX2PMLV6iDzzv7ly4mwSWTAKPDaKuhjlgjLWzSUzZL6b2J9k310+Kl+EqOajwSGknmbUSxl2eRsAiBub7DvS2GtZieE0uZwD3xNv13tY/FTVFRx0jMsY1O5K8VKNsbmm+h7+M6pURa3Fo2CNthulE3fVwRuIdILjfQruGeKf9E+6kIxVCB2IQAhCEBH2B1cCB1heZR915t2r06je91wgOzowa31KzOv/W4/8Qfk5aUDr4rN8Q/XWf4g/wALlT1fY5fEtol/wl3/AJVSN/5TfknCaYR+y6X8pvyTtWoeVHRq8i9gWbcfzibHuj95sMTGEdRN3fIhXbHsZgwal6WQZ53D7KK9s5/kL6n/AGvi+KjFJ8WqcTpZ4nPqn5p4Zr5SbAXbbYWA7rdSmrXcSfYmYaJ81BV1RHsQZG/5nG3yB+CmOGsppzFu+oqo4+8XBPwzLnGKeuw/0WwupYmevVMsckoG297a2+6Aoj0fQYzPjtLU1ghZFFKAYg0XN2kbjz8FvnKZrszUx/eil/Id9VY1XB/eil/Id9VY1Uhu/cxVvL3/AIBCEKQmBM8ULxT+z7t/b7k8XjgCCDsUBXvYJBBsRsSPrySrqqoa3KZXW/rml66nMJztI6M73A0TRzzfW1vwkaLbcwdBzy0ODjmBPtE7DTmpqmk6WBj73uNT2qDP2jbMBFt2n5pWlqn04LWjOw8jyWMAc4w79G3quVSuOIMsNDUfic5vyI+qt08grZxlBADeag+OWNkwhpze1HK13gQR9Vb0EuXUwKPEoc+kmvr9upQXRuflEfvtcCPr42+iE6wt2XE6V246ZlvNe4pTeqYhPANmvOX906j4EL1Kn/68vyyeOcH4PP8APH9/JbOFZQ/B4wLXie5mm++b6qcMspGTM+w5F30VW4JlaY6uF33S148bg/RWlrr3GnhoV5fXQ5dRNfM9lw6zn0sH8sfboc5QPetfs1K7heWSsMd8wI3XAAJDSXEnYZf91J0NGIz0sgs4bA/NVGXSQCF4Nl6tTIIQhANKttnZutN9lJOAdoRcJF8cLGue5tg0XOuwQDNZzX/rjfz3fJy09kkMsWezQdRbmCNCswxEj1sA7esH5OVPV9jl8S2iXvCf2ZSflN+Sb8Q4vFg2HOqHta97jlYwkC5PM9iisP4gFLSsglpnPLBbMH2B79FSsZgbPxyziGTNJka0NpJrPYRkLbDTRvO2utypIaipRWWSx1tMa1lirYsU4kxKSUAzzO0cSMrI29/3R/VldMC4QpKAtlrMtVVAaX9xvcDv3n4JhQcSTNpWilo6SBguBGxug1XbuIsQcNHxtH/xZ/NbS1tfYx8fQuvVjn0h/sGPW/8AxLf4XKI9HcD5ayokP6KEB3+cggfDN5plxNiVVV0cTKmbPGJMwGQAXANj8SucGknpKMmOWSPpHZiGvIW71EVTzm0tZBQVmC9se13FVMxu7Kc5u/VWQbKg8LCR+K9MD7LIzmee0f7qy4hUz5GMbq1/svFt7kc+WmY+FuYUdEuZOXqzfSTdkXPG7JpCicPqpH0cRs6PS2RwAIsnHTyfi+SnLY+QmPTyfiR6xL3oBesh6aBzAbE7KGkgliF3xuHbyT2pq5Y4S9paCCNXbDtOu2/l2JthtY+Zk8crHB9w5zZQfvNBsO45hosoDYaG670fsbH5px6q38Th2Lz1Vtx7W3Ws5Amfsow0Czne93KK4giz4NUtPJmbyIP0U3NAJHNs7ZNqqhdNSzxXu17C3zC3qly2Rl6Miuhz1Sj6pma0LrV1N2Ss+DgpzjOmyVdPUt2e3oz3j/v8FAUzg2ogeNw8fNXnieifPg85DLuhtK092/wuvRaqzw9TU/dHldFT42juj3WH9slc4SlyYrk/Gwjx3+iuuxWeYNJ0WLUb/e+1DfPT6rTG0FQ6948uvvZhp4LncWji5S9UdTgdnNp3H0Y6wuIZTK7fYKRScEQhibG3YJRck7YIQhACEIQDapfI02As3rUZiUDqyHK13tgHK48rjcdo+luZU2ddFw6GN2pbcoCLpYpWNc2Z2Yukc5umwJuq9jPDc1VOZ6CeOMmTOWyE2B7xyP8ANXE0zDsSB1BcmlP3X6dq0nCM1hkVtMLViRRouHMRNhJ0DDzu8keGiXHCspN5J4b9jbq4Gmk5FpXJp5ByB7lF8LWV/gKPT8lYj4WYBZ1SR+7EB9UuzhmlBs6eZ3kPop/oZQPdXnRS/hd4LZaetdjdaOhf4lG4y4GkxjDoabCK00kjJw+R0rjZ7bHT2e0g+HcnPDHDmJ0THRcQy4bWxsYGsmhZIJXEc33NvIXurf0b+bXeRRkd+Fyk5I4xgl8GtLHKhKCnhp29HBCI2HcMFr967H9ar3K78Pmix56LKWNiRJJYR4he2RZZMjKsrOjJjZ7Lhc5nbaNJtv3eZ8HiSnpY5jmfHmIFgR4/HU270qGFoDWsNhoLIAsi2q6yO/C7yXvRu/C7/SgOELvopOTXL0Qyn7vnZAJpviDquOkkfhsMU1WG/ZsmkLGE35uANtOzy3T0U8h7F16s87uagMrouF+LXYvTz1sGCx0hqWvmbFK9xEeYEhoI6leuIX4yKHLgNPQVNQ85XNrJHNYBa2zb38wpsUnW7yXYpW8ybqWy6yzHO84IaqK6s8ixkzThXhbH4cWZNxCzDvV42l7fVJHlxfcWFiPdGvwWkQSyF1hdw535JZsEbeV+9KCwGmyxZdZa05vODNVFdKarjjJ6hCFGSghCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQH/9k=",
      links: {
        github: "https://github.com/DevLord-Avijit/Whatsapp-Automatomation-Script",
      },
      isPrivate: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "python", label: "Python/Backend" },
    { id: "ai", label: "AI & Automation" },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden scroll-mt-36">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Showcasing expertise in full-stack development, AI solutions, and automation tools.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                ? "bg-foreground text-background shadow-lg scale-105"
                : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-none border border-border overflow-hidden hover:border-foreground/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-full hover:scale-110 transition-transform text-foreground"
                      title="Visit Website"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-full hover:scale-110 transition-transform text-foreground"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.isPrivate && (
                    <span className="p-3 bg-background/50 rounded-full text-foreground/70 cursor-not-allowed">
                      <Lock size={20} />
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

