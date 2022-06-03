import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { TextInput,  } from "react-native-gesture-handler";

export default function Home({navigation}) {
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <View style={{ backgroundColor: '#663399', paddingTop: 100, borderBottomLeftRadius: 70, paddingRight: 10, paddingBottom: 20, alignItems: 'flex-end'}}>
                <FontAwesome name="search" size={24} color="white" />
            </View>
            
           
            <ScrollView>
            <View style={{ marginTop: 20,marginLeft: 0,}}>
            <View style={{alignItems: 'flex-start', paddingLeft: 10, paddingTop: 10}}>
                <Text style={{fontSize: 25, fontWeight: '600'}}>Hair Stylist</Text>
            </View>
            
                <View style={{
                    backgroundColor: '#faebd7',   
                    padding: 50,
                    paddingVertical: 80, 
                    width: 390,
                    height: 210,    
                    marginRight: 50,
                    flexDirection: 'row',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{marginLeft:-20, marginTop:-50}}>
                        <Text style={{color:"#663399",fontSize:20}}>Cameron Jones</Text>
                        <Text style={{color:"#663399",fontSize:15,fontWeight:'200',marginTop:8}}>Super Cut Salon</Text>
                        <View style={{flexDirection:'row', marginTop:8}}>
                            <FontAwesome name="star" size={18} color="#663399"/>
                            <Text style={{color:"#663399",fontSize:18,marginLeft:10}}>4.8</Text>
                        </View>
                    <TouchableOpacity
                    onPress={() => { 
                        navigation.navigate("CameronJones")
                    }} 
                    style={{
                        backgroundColor: '#663399',   
                        padding: 8, 
                        paddingHorizontal: 25,
                        flexDirection: 'row',
                        borderRadius: 30, 
                        marginTop: 30,}}>
                    <Text style={{color: "white", fontSize: 18 }}>View Profile</Text>
                    </TouchableOpacity>
                    </View> 
                    <View style={{flexDirection:'row', marginBottom: 50, marginTop:-90}}>
                        <Image
                        style ={{
                            width: 150,
                            height: 190,
                            flexDirection:'row-reverse',
                            marginRight:40
                        }} 
                        source ={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPm2LG5vSCaqAfpWpcgSGU9SbhxLgRnf0SRg&usqp=CAU"
                        }}/>     
                    </View> 
                </View>

                <View style={{
                    backgroundColor: '#e6e6fa',   
                    padding: 50,
                    paddingVertical: 80, 
                    width: 390,
                    height: 210,    
                    marginRight: 50,
                    flexDirection: 'row',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{marginLeft:-20, marginTop:-50}}>
                        <Text style={{color:"#663399",fontSize:20}}>Max Roberston</Text>
                        <Text style={{color:"#663399",fontSize:15,fontWeight:'200',marginTop:8}}>Rossano Ferretti Salon</Text>
                        <View style={{flexDirection:'row', marginTop:8}}>
                            <FontAwesome name="star" size={18} color="#663399"/>
                            <Text style={{color:"#663399",fontSize:18,marginLeft:10}}>4.7</Text>
                        </View>
                    <TouchableOpacity
                    onPress={() => { 
                        navigation.navigate("MaxRobertson")
                    }} 
                    style={{
                        backgroundColor: '#663399',   
                        padding: 8, 
                        paddingHorizontal: 25,
                        flexDirection: 'row',
                        borderRadius: 30, 
                        marginTop: 30,}}>
                    <Text style={{color: "white", fontSize: 18 }}>View Profile</Text>
                    </TouchableOpacity>

                    </View> 
                    <View style={{flexDirection:'row', marginBottom: 50, marginTop:-90}}>
                        <Image
                        style ={{
                            resizeMode: "contain",
                            width: 150,
                            height: 200,
                            flexDirection:'row-reverse',
                            marginRight:40
                        }} 
                        source ={{
                            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGRgaGhoYGBoaGRgaGhoYGhgZGhgZGhocJC4lHB4rIRgYJjgmKy8xNzU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQsISE0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQxNDQ0NDQ0NP/AABEIARcAtQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAgAEBAQEAwYFAgcBAAABAgARAxIhMQQFQVEGImFxE4GRoTKx8AdCUsHR4RRicsLxM6IjJEOCkrLSFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgEFAAICAwEAAAAAAAABAhEDBBIhMUETUSJhMnGBFP/aAAwDAQACEQMRAD8A9MhC4TdmIQhAhGwhAxCEIAkIQgNAR1RsUQGhEMWIYDQiQhACBiGECESFwlAhhCEAIRsIBYEWNiiSZYQjHaoA4RpNSoeYYavkZ0D2Fy5hmsiwK3/5mdxHO1NiiBVg+U2PYEkXfWv5QNt/EHeVxx6WReovTfrXScfxHNsqM4cZimICwAYZmylFobkEUL3omZWBz0piYaO64ZKH8QpVoLkIcMcwNn2IraG4NPQOM5kmEod20Pa26XsJzvE+NcMPlwk+MVUu+RgoVc6IBru1vt2HrOK5jzvExkp20LgZTohTDe3Qtltg11YOt0QJj4/NFOKTTYYBxPMKojEskFdPLrt6xd0PT2/huZpiYS4qElWQOncgiwPfpMTgvFufGw8N1QfEsABnzqwBOUhlAY+Ug0dD3nC8L4sYYaIRRRaRl8otQQoYLW2YbVtpUxuGco+HiF7yOWo2KKtebPWWjXSHdBp7nxHMMJPxuiaXTMoJHcDc7RmDzBHBZHVlG5BFaev63E8X4jnL4vxMxRs7WGNMVoilHp0G+hjcDmDKnw0IytiF3C3bNlry6DTQaR7hWV7fh8SrXR2/X9fpHhxPAj4gxgCAxA3o61oKI6rt0rrOz/Z1xzviMzPWbDOdS5Od7Qq4B2YDMGPWxCWX0LK9LuEYuJoCdIqsDKSdEiiENgkIQgDYkdCAWLhUbHSVQ12qZXM+PXIy5wCrKr6hWFgNQLULII67X1l/jMQKhJNf3nkvOOIZMru7sWdwp1slTlVnB0N1VDp9Iu7RyHc7LYbDF+IrOSbvM1LnDIpFkMBkF0dCO13awufYL0jkLmBDNdKWBPQMSlkBvw6H2M53jOOZUXDLWEUFV0IU15gD1F7dta9cHFfPtZNijoNPUb/eTtWnSc84oozYSsclEnMcwF1lyg6kXlvXWcy/FWVWyx/iI1F1QXqAI7DUs6o2a1UqQoJtq2Iv1okdhGYSJbMaoDRTZzMdOnz3iB+JjmspcmrodtSSK6bnT1ldsQ59r126abyXEU5Q+VQLO1alhmruKqR4CHNYI2JN7UAb16QCYv8AvZdL2B0qvr3+kR8bTc5SApUNpQ202PeQl6NURteuvfSO4fGGbMUD1Z3Ir106e8Ak4QktlsAaam6Ukjt1vp/SScRjqDSGyBqwGUDegvau/rK6cQW/ygmzWtLe1HpvKou6HXS+8At4+MRmGhN76Eit6PbfabvhjmK4GOmI/wCGqIG4B1G5HUDoZh2pWlGut7agAXuNKr7SPGeyMt1XXU0B1MJdXZPUOA8eri4rYZAUHVCelWWVrNXodQeoHrL2B44QcSvDlCbxEwwwIAthefU/h8w69OtzyLAUqbKbdxproPS950XhXFQ4ypxBcAMjqmiqWSyDiFiNB0E0mVvgrjHusJDwuIHRW/iAI6aEWNOm8mjrMRIsSOGIRCIQCxGu1RHapyvPPEL4DoCoyOWWzvY2Hp/Y7VIq4yvFXPOIwXcimS1FEVlHlyuD7m+vWed8fzFnbO2pB11OUlicxCk0up0r7zqud8YMd2KEgZVZ1ZCbYMNHA2Ne+3rryPHjCGcYd65XC0AtgVoTuAc33kVURcVloEMT5zozZmGmhvttfrK6MgBzA6nMKoNdbag/1iYoDfg1vqSASb794Yr2MgABBrTv7+gvWARPxTXYJFdf3tutfOQBvqf19ZK6ZT+I1fm029a6xcZXDDS6prHbQ61t0+sAQM9bEjff+X1+sP8AEEJl0o71v6D73843GxS7Frq9a6X+UfiYhYqGCjLvXaARprqw7aenp9I810sDetNpO65VGIC2pNAr5RVbMf6f0kIxc7G9Bqdr09IBLxK2QVWtOg0AH/GplXAWzrpoSde3pJcthVQEnW+ovoPpX1jCwC5djdX37wCbUAXprrp5gdKOvTWMTD1IFte1b1fm077xOINEWcxKjWiK9NTrGYDkHQ7de3t2gFg47keU0ASwHaqon/NsPlNHkPEr/iEckAF0zEk3vqw9qF+jGZXx2drO9dqGg2A26bR6Jocw9B0+0Nh64fHiBUKYZCOwRMTEZVU61mZV8wX9Gta6nlPGHFwg5y2SwJW8ppiMy3rR0Ppc+enUAEED3F0Nuncip6n+zl+LZWzq4w28wZ73FikDa699tBNcb3M8sdPQYRBFjSIQhAJWE5PxNzDARhhOqYjNbfDd1wxRq8rMCM5s5Rp11ur66cP45TC/fSwSru2QPkCq6o+TerXKSA1KGsDrNXK4HmvHu7IyAojIGwUDjMBZKM21G8//AMvnMbEVS2zJ1IY/hNAOBpsSdtN+lzb5vw7s2I+KcwRgXZSpGQvkphdoCQTSil07qJhrhuPMQaYE6i84awTqNbOXaZ1ZnEYvw8yLlorlPU7m72o+nSVsIeUm9TqKN0Re/uCftInXU6ka0R1Fe8Y5GhGo210MAbm19vv7yVMZrsGj6XfbQ32/KQKCKPrp+tpcwigObWyNiFq+tVsL/pAGpSqHzA0SrLsaIo/XX9aSFsFkHm0tbF3sf5y07l2BoHKLN6BtSa095UxsZmYsdz9tKi2DWexWp176f8ycigKGVh13vcf0icMg/e/KSNxQzEhdMpABN1ZB/wBogauu+n566SRCGbzDTSz8gLkb0arsL9+sBYHWBGGzqT+v5RwZaIo5uhvSvatfrJGfygVpuL3HQgekah3NWdhAGpiV01jket+mo1kbKbArU9IhFaHe4w0MF0sWAzBvUWOoJXX2PSereEvGAxiuCuEErIqgvZZKAJFKKIAF/nPHUOt3rNPlnFujqyM4N1/4bFXGx3B0H2l8d86TlNvoq4socnd2wcM4ht8i5z0ZsozEbaXL80s0zNhCEQTmYfO+XF8zAKzhCqgjVbs2p9Tv/pE3IpWTDeF8+4NuHc51Xra5jZRmDWSNMl5BlJB60JzmJiqbIU9ClPoq3qvrpWvp1nr/AIu8Df4tzipi5GOXMCmYEKMuhBBGld9p5t4h8N4nB5fikWxbKFOmVRv1I1IoV31kZS/Fyxho2pYaHp169Sdtt40rep+vSTcNw+ckEnN0FA3rqPTS9fQTreA5AoQBhZO/02mPJyTH26OLhyz3pxL6nQAa2APX0l7i+FbCGUjWg12Cde4Oo2r5fTq8Dw0DiKSxKrsGo16aDX53NTnXhhMbzgsGoA0RlIGxIPXXcTL88t/pr/5rJ/bhhw1Yd0SWGY121qh9JQTBZ2Cj0J+oup6lyvlYwkCVYA69ZX4nkmFmzKgVtrGn2hOaT2d6e+HG4vLqCld7IrfoCPfczI4vhmDEjqSfvO9Xl52I21voW7+39fWNblKncdtPWOcqMuGvPl4c9pOMPTajrv27TtP/AOMFG22l0NtOn6/pBxXLdDS6a6DoddBpH+WVP4q41k9Iwp8p0fEcDQ229var+f6qZHE8KV9R+v7zTHKVnljpnbRJK6yMV1loOSus7z9l+AHx8RGy5WwzasASwzLWXToSOvUb9OCE7fwPhl8fCy4bIoZ7xMoIysh8hzAhjYuztXrNOOeU5enr/LuEGCgRWZgCazG6BN5R6DYS1cjQUAOwrv8AeOuaVkWES4Q0FoQgIgkKKJ5jz3wXxGLiYmJiYuY5PIxBJxCrAqpKDyCswqtDVZqnp0QwPbyblXhhsFmOImVmIIUkMyqdgWAFkkX7UN7lrjea8PhWpYFh+6uv16X1lnm3Mn4jF4nBAyYmG5VRerIKUN8xR9MwnI8v5JkfPxFZQbAvc72Zw8uONyvc9DjyymMmM/66/k/MUxAz5KRdC2+vYDcmtZscNxOG4tGB9NL+0qcDxSZAEFL0pDX2FS3hHDOoVD6gCY/x/TaTL7RjJQlFkmqygiUnw6MjKNMarPhiRDDlp5CDKx9Iy9qpF+0rPhiXHGtSri3dAWe0LSmO2fxGGL2Gv61mLx3C+nofbYfym3xlrupGvUGVcbKRr+rl4ZaZZ4OM4rByk385S6zc5suvSYtazrxu45Mva1y/hld0R3yqzUzVdL1NT2zwtwSJhqUOda8rnUkA1v1GmhG4mJ4E8N4acOj4uGru5zjOgJXYALmFjb63O3X0nXhj2xz5ZbqcGFyMNFuMj7hGiEAux0bHTJQhEuBgbnfFWE5CFMIswdfOCoAQkB7JI6UepNTH5nytDhtmGYVdevaddxLZzl/dG/qf7TO4rDABnD1Grl4+PR6aXHHV+uD5PyhQhDIqsXLWtlhoAFvQdOx3nS8Jy8LVFtO7Fr+Zk2Bgqp2l/Dqc9yuV8uiYyTwkwEoStxCCW2xABMricfrHllJCxltQcQJSLnaPx+IkWD5iJnavS9weCPxH7ynxTu75MLygfjcbi7oDtdH6TUxFAQ61QJP0mHyPOz/EXRnQBhvqAxynuNd+kKqT6t8dwjKozOWDaHMLI9j1nH8w8jsh6HvO643EzlB0q/tPOed8Vnx3IOmYgfKbcU3WPUXWMrN4xrB9J0/7P/DAeuJxlBS7w1OtlSbeu1gVfb2Mx+U8uPEYq4QBysfOR+6g/Eb6dvdp69goqqFUAKBQA0AA2Anp8OH2vJ5c9eInEeJGDHAzosYRKI4GRgx4kqhbhCERtCEITJQkPF42RfU6D+Zk0r8dwoxFy3RGx3+RHaLLfbde14WTKb9K6uGWlMyOJ4gglT10+fSYvNcTH4bHCnGw8pANDMSBrq2xG3y03uS8L8THdWbRAc13eetq9L6mebyd0ur7erx3HKblaQ1io9dY98OpEymYeq2Li4hmdjtcuOdKlR0uFuxFNhJME1rDEWQ4j0Igu8VwrcQiIuJkSyXABt/S+0sYbJgtlUMBRA/eJ01+cwuC5nlV1KsXRlyENoVbNnUrVaabkbitjdLi+Z8QTajJpQO5AO9S+30Xd7W+d81+GG6OwpV3yLVW3r6TgWPWX+KzGyxJJ3Jk3hvl/wAXicNDqoOdh/lTzV7EgD5zs4cJPE+uDqOS5X/TvfB/JxgYIdhWJiAM/cLuqelDf1JnQCMBjlM9TGamnmZXdSiOEYDHAyiiQR4kQkgmdWdFiXCBtGEITFWxFuJAwDzTnXLs+PiOz+cuRqPKACAFB9AoFnepNwPHvhEKwJUDQ99PSb/P+Ewnckgg1TUazGhRPsJgPy9fxIWFdLJv6zh5b/K7etx4Tslnh0OHxCuAw6xjyhwT5dNu/vLT4gM5crLW0mjHEq4jgSZ3lDiMXWRThuM8z+JxY/iOIEzHxcxoRyK22eVYINtUXjsEUZc5emVAJX4/YwTtyHHpqZqeBE/8w57YbV83SUeMW7l7wg2THr+JGX56N/tM9Dgy8x5/UY+3fAxymQKZMpnpx5liUR6mRiOEYSKY8GMEcsmqiSEaISTakIhMUTFYhCEAwvEPJziKXw2Icaldw4A2rodOn95zOBikid/jE5WrejXvRnBcG69a/Wk5eqx8Su7pc75lqUXJQSN4mNjIvUfrSY3MObKprNqJw9lrsucjU4jHAmDx3MVHWZfHc6LGlMrYCZjZ1lTjs85D8kv+Kwju5u9DtNjgODANneQcNhV0mxwmHIyv6XjP2v8ADppKfHrpNHD0lTjFMUJzHE4VxnBt8N0f+FgT/p/e+1zQxMLWRPw+k3wz1Yyzw7pXZqZMrTH5JxWfDCn8SeU+w/Cfpp7gzUQz2sMpljK8XPG45WVZUyQSJZIstCRY4RimOWTVQ+EISTaQEWEBMVlgYQuAJPMvGOA/DYhKA5HtlI2Uk2VJ97r0M9NkPEcOjjK6Kw7EAxXGZeMvSscrjdx4XxHOHJoXrYoWdzt+f1ljlXhni+KayrYa3qzgjrWgNXQnsuFy7BQ2mEinuFUH8pOEA2hjx4T1DvLlXAcZ4BwsPAZ0d3dRmObLRA3oAaaWd5icJweXpPWTOP5vyr4TZl/A23+U/wAJ/l/aZdTx7x3Pjo6Xkky1l9ZeHhAS9w6SFBLCGp5OnpraLGcSmkdg6xcfaXEsg4e8VcIUZcGDpDDwowzMJjhvnA02YdxOjwXDAMDYIsGZWLw/U6A9aOveq3lHiOIxsJc2AbI1OG6gq3cAq1q3aiRZ1E7+m5rjNZenB1PD3fyx9uqVpKpnB8B+0LBOmLhuh6ladb+zD6GbeD4x4Fv/AFwPdMQf7Z6GOeN+vPuNjpVj1lbh8ZXUOhDKwBBGxB6ywJVTtKIRtwkKasIQmKxCESALEhEgRDGmOMaZUBpkHF4AdCjdfseh+snMYY9Deq4zGQoxVtCDEWaviFBmQ9wR9CP/ANTKUzyefj7crI9fh5O7GVbRqk6C5WwRIeZc5weHHnfzdEXVj8ug9TUxxlt1GuWUnmtMYUocx5jgcN/1XAarGGPM53FkD8Isda7d64vmfi/iMS1wz8JNR5D5/m+4/wDbU50D9dzOzDg+5OPk6j5i63jvGV/9PDvQDNiHU1/lTb5NMjF8RcQ3VR6BF/3XMwYfeKKHXWdGPFjPjnvLlfpvF4QxGLutM25Xy2e5A0uQjCVTarr6m/pJHYj8Jv0gmOG0NX+uvSaaiHb+CPECKg4fFbKQx+Gx2IY2UJ6Gya6Ua6TuwZ4c93QBs/b5z1rw1zH4+AjMbdRkf/WoGvzFH5zfDLc0xzx15bVxZGDCWz22osQRZzNiQhCABiGLGmAEZHGNJlQiGRkx5kTmVA53xJzBFxMPCbQsrMpOx1Ay++hMx8TjURczuF9zrp2G5+UyvHnG/E4goBphjJfUk0W+QOnyM5Opyc3DMsrduvi57jjrToOaeKXIKYNqP4z+L5D93339pzTMWJZiSTqSSSSfUneSfC/X9o7IRsDHjx44zUiMuTLK7tMVIpboo+cc2Ax3irw5/iM00hCcEncw+COhk4wO9xwwR2/OPQVvgesR8DTWj+f1lpsOOyEj17R6LakpZRrdd629/Sdj+zziyHxMIn8Sh191OU/UMv0nJvhVsaPa9PvL3h/jP8PxCO+iXTdgrAqT6qLv5SsbqllNx66DCQpiCrB0OoI2I6EQnQ53RiEIk5WxYQhACNixDKBpMZHmIY4RhkbCSyhzni/g4Lv1Apf9TaL9zfylQnlXiFwcfFYa2717ZjMgvUtca0z3mWXtrPRWxjEGKY0rFGHIM74xijGMFwpKuDKmwarkyZQYBQI+NJrACRl6945jGBIA9lVxtKrYJXVT8jsZZwtD6frr7fkJFicSoatx3BB+olB0HhzxUMDDOFiAkKfL+GwDuvm6Dp710EJzrYStqNf5Qh3ZDtxfQsIQgkRYkIAGNMWIYoDTEj40yiNM5Px5xVImGD+Ji59lFD7sfpOsJnm/jDi8+O/ZPIPl+L/uJlT9hyfE6mpAUljEjQsyXEOSPVBHtENmGgTSGeBXvI2ftAJM0BIQYPiBRf0Hcw2E7EKLJ079JUxeK6IPmf5L/WRMxc2T7dh7RVoRbPSN1Ztzfvt9BGDDF6mummn5ScvGOtw0ZDhP08w70ISPORpCLcD6ThCE0ZiEIkAIkWNMICRDFMSMkHFY4RGc7KpY/IEzyPi8QtbHUnUn1M9G8X8Rk4cgbuyp8vxH/wCtfOeacVHfGJz2pkQEeRI2magzRj4lQZpETCgO5MizRHaNEm1R9+tdflK5bMf1t2hjv07/AKEciRAFo0mOaMjBbhcbFhsFhEJhEWn0hAQhNUCJCEkEMIQlA0xIQjS5Dxzia4K/62P/AGgfznCY51iQhl6hxXcyItCEhaNmkDtCEmqMvpB2qEIgr4epsyyhiwhCprSMwhKpmwBhCSBCEIw//9k="
                        }}/>     
                    </View> 
                </View>

                <View style={{
                    backgroundColor: '#faebd7',   
                    padding: 50,
                    paddingVertical: 80, 
                    width: 390,
                    height: 220,    
                    marginRight: 50,
                    flexDirection: 'row',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{marginLeft:-20, marginTop:-50}}>
                        <Text style={{color:"#663399",fontSize:20}}>Beth Watson</Text>
                        <Text style={{color:"#663399",fontSize:15,fontWeight:'200',marginTop:8}}>Neville Hair & Beauty</Text>
                        <View style={{flexDirection:'row', marginTop:8}}>
                            <FontAwesome name="star" size={18} color="#663399"/>
                            <Text style={{color:"#663399",fontSize:18,marginLeft:10}}>4.7</Text>
                        </View>
                    <TouchableOpacity
                    onPress={() => { 
                        navigation.navigate("BethWatson")
                    }} 
                    style={{
                        backgroundColor: '#663399',   
                        padding: 8, 
                        paddingHorizontal: 25,
                        flexDirection: 'row',
                        borderRadius: 30, 
                        marginTop: 30,}}>
                    <Text style={{color: "white", fontSize: 18 }}>View Profile</Text>
                    </TouchableOpacity>
                    </View> 
                    <View style={{flexDirection:'row', marginBottom: 60, marginTop:-90}}>
                        <Image
                        style ={{
                            width: 150,
                            height: 200,
                            flexDirection:'row-reverse',
                            marginRight:40
                        }} 
                        source ={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KULSDWZe9TintTPReI6sMpdI_gcAvKxT7A&usqp=CAU"
                        }}/>     
                    </View> 
                </View>
            </View>
            
            </ScrollView>


        </View>
        
        


    );
}