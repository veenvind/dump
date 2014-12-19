my @intl=('ar','au','br','ca','cf','cl','co','de','e1','es','fr','h1','hk','id','in','it','mx','my','nz','pe','ph','sg','tw','th','uk','ve','vn','us','xa','xe','za');
my @lang=('es_AR','en_AU','pt_BR','en_CA','fr_CA','es_CL','es_CO','de_DE','es_US','es_ES','fr_FR','en_HK','zh_HK','id_ID','en_IN','it_IT','es_MX','en_MY','en_NZ','es_PE','en_PH','en_SG','zh_TW','th_TH','en_GB','es_VE','vi_VN','en_US','ar_JO','en_JO','en_ZA');
my@intl_t=('ar','br','de','es','e1','fr','id','it','th','tw','vn','hk');

for(my $i=0;$i<30;$i++)
{
#my $command1 = "curl http://info.yahoo.com/legal/$intl[$i]/yahoo/utos/| grep utos- | cut -d'\"' -f2 | cut -d'\"' -f1";
my $command="curl -Ik 'https://info.yahoo.com/legal/$intl[$i]/yahoo/utos/terms/' | grep '\\(HTTP\\|Location\\)'";
    print "$command".`$command`;
}
