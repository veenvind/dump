<?php

$temp_xml =simplexml_load_file("temp1");
$xml= simplexml_load_file("data/downloadlinks.xml");

$a= $temp_xml->group[0]->children();
$b= $xml->group[3]->children();
for($i=0;$i<32;$i++)
 $b->subgroup[$i]->shortcut[0] = (string)$a->subgroup[$i]->shortcut[0];

$xml->asXML("data/downloadlinks.xml");
?>
