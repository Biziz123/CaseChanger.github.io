#include<bits/stdc++.h>
using namespace std;
#include <cstdlib>
int main(){
   string s;
   string ans="";
   int up=0;
   cin>>s;
   for(int i=0;i<s.length();i++){
       if(isupper(s[i])){
           up+=1;
       }
   }
   for(int i=0;i<s.length();i++){
       if(isupper(s[i])){
           ans+=tolower(s[i]);
       }else{
           ans+=toupper(s[i]);
       }
   }
   if(islower(s[0])){
        if((s.length()-1)==up){
            cout<<ans<<endl;
            
        }
        else{
            cout<<s<<endl;
            
        }
   }
   else if(s.length()==up){
        cout<<ans<<endl;
   }
   else{
       cout<<s<<endl;
   }
    return 0;
}