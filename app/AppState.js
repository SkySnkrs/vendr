import { ItemModels } from './models/ItemModels.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  keyCount = 0

  items = [
    new ItemModels({ name: "Karambit | Tiger Tooth", rarity: "Covert", price: 1300, odds: 1 / 100, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY60g_7zNqnumXlQ5sJ0teXI8oThxlew_hJlN26ndYfDcwNsZFvW-gS2w-u9gsK0vpvIy3Nj6XUl5HjbmxapwUYbPsZKINM/512fx384f' }),
    new ItemModels({ name: "Butterfly Knife | Fade", rarity: "Covert", price: 1200, odds: 1 / 100, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NE_iLjA99nzigexr0NkYmH2dYSTdAU9ZQrW_lm2kO3pgcTuv8vLy3I1sj5iuyin5z3u1g/512fx384f' }),
    new ItemModels({ name: "M9 Bayonet | Doppler", rarity: "Covert", price: 1400, odds: 1 / 100, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEprP5gVO8v11lZj-gIYbDclRqMA7Zq1S7lOm-0Za6753KmHoxvnQh5y7ZyhWxiRwecKUx0iL1oy6z/512fx384f' }),
    new ItemModels({ name: "Driver Gloves | King Snake", rarity: "Covert", price: 700, odds: 1 / 100, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_9K3n4WYnP76DKzZn39U18l4jeHVu4qjiQHgqEQ9YDqlLYfAIVRrYQnX-1Psk-zuh5Du6sjOziRrvCgg4CrD30vgkfBFTtQ/512fx384f' }),
    new ItemModels({ name: "Hand Wraps | Cobalt Skulls", rarity: "Covert", price: 650, odds: 1 / 100, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6Ll9pORzO_1Drw-a81pK478jOySQ3vnV24n7UnBex0BhKOOE81_XLH1-WB60bGb7CWCRHpAEwPA/512fx384f' }),
    new ItemModels({ name: "AWP | Neo-Noir", rarity: "Classified", price: 150, odds: 1 / 50, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPv9NLPF2GgE7MEk3e-ZoNmgjAXnqEdtNWn7JISRJAQ5MFHT-1W-xuq9g5-07cvXiSw0SeFYhWE/512fx384f' }),
    new ItemModels({ name: "Desert Eagle | Code Red", rarity: "Classified", price: 135, odds: 1 / 50, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5Mx2gv2PoN3zjlbs_BVsYDimJNKWIQI4ZgzU_lC8l-28h5K6vJvOznZr7yYjsWGdwULr5DlSTQ/512fx384f' }),
    new ItemModels({ name: "AK-47 | Neon Rider", rarity: "Classified", price: 145, odds: 1 / 50, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM/512fx384f' }),
    new ItemModels({ name: "P90 | Asiimov", rarity: "Classified", price: 120, odds: 1 / 50, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPF2DtS6ZJ33e_Cpd-niw3sqEY_MGzzItXGJlM3YwrT-QS7ye3p1J7ttJXXiSw09F9GDzA/512fx384f' }),
    new ItemModels({ name: "M4A1-S | Player Two", rarity: "Classified", price: 125, odds: 1 / 50, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbN_Iv9nBri_kBtYWv2d9eXcAI6YF6ErFXqkui-1Je-75ucmicyvyggt36InhS3n1gSOc6J6LtH/512fx384f' }),
    new ItemModels({ name: "USP-S | Cortex", rarity: "Restricted", price: 45, odds: 1 / 10, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/512fx384f' }),
    new ItemModels({ name: "FAMAS | Eye of Athena", rarity: "Restricted", price: 40, odds: 1 / 10, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-Jm5eHqPjmMrXWk1Rd4cJ5nqeW9o6miQzir0BqYGj0IYWVewA6N1zQrle4k-nqgJG0tcmcziEysihz-z-DyOcjvJ-R/512fx384f' }),
    new ItemModels({ name: "Galil AR | Chatterbox", rarity: "Restricted", price: 42, odds: 1 / 10, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-KleX1ILLemFRc7cF4n-SPodvz2gzjrUE4ZWyld4_DdlBrNAyC_ge4xr_qhZO-7s_PwXRmsnJw7GGdwUI2M1HQMQ/512fx384f' }),
    new ItemModels({ name: "MP9 | Stained Glass", rarity: "Restricted", price: 35, odds: 1 / 10, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7ODccDRM6diJk4yKhOTLP7LWnn8fupF12-rDrImiiQ3trko-Yzz2IoCWIwQ6ZAzW_wO7x73rh8C_uszJm2wj5Hfs9bMXBg/512fx384f' }),
    new ItemModels({ name: "CZ75-Auto | Xiangliu", rarity: "Restricted", price: 38, odds: 1 / 10, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "P250 | See Ya Later", rarity: "Mil-Spec", price: 12, odds: 1 / 3, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "MAC-10 | Disco Tech", rarity: "Mil-Spec", price: 15, odds: 1 / 3, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "SG 553 | Tiger Moth", rarity: "Mil-Spec", price: 10, odds: 1 / 3, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "UMP-45 | Moonrise", rarity: "Mil-Spec", price: 8, odds: 1 / 3, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "MP5-SD | Gauss", rarity: "Mil-Spec", price: 9, odds: 1 / 3, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "Glock-18 | Candy Apple", rarity: "Industrial", price: 2, odds: 1, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "P90 | Sand Spray", rarity: "Industrial", price: 3, odds: 1, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "MP7 | Army Recon", rarity: "Industrial", price: 2, odds: 1, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "M249 | Gator Mesh", rarity: "Industrial", price: 1, odds: 1, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' }),
    new ItemModels({ name: "PP-Bizon | Jungle Slipstream", rarity: "Industrial", price: 1, odds: 1, image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/512fx384f' })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())