<?xml version="1.0" encoding="UTF-8"?>
<tileset name="loot" tilewidth="64" tileheight="128" tilecount="5" columns="0">
 <grid orientation="orthogonal" width="48" height="40"/>
 <properties>
  <property name="visible" type="bool" value="false"/>
 </properties>
 <tile id="0">
  <properties>
   <property name="loot" value="ammo"/>
  </properties>
  <image width="25" height="31" source="../sprites/props/ammo.png"/>
 </tile>
 <tile id="1">
  <properties>
   <property name="loot" value="health"/>
  </properties>
  <image width="48" height="40" source="../sprites/props/health.png"/>
 </tile>
 <tile id="2">
  <properties>
   <property name="loot" value="gun"/>
  </properties>
  <image width="19" height="12" source="../sprites/props/weapon_gun.png"/>
 </tile>
 <tile id="3">
  <properties>
   <property name="loot" value="equipment"/>
  </properties>
  <image width="21" height="22" source="../sprites/props/helmet_blue.png"/>
 </tile>
 <tile id="4">
  <properties>
   <property name="loot" value="door"/>
   <property name="pivot_x" type="int" value="7"/>
   <property name="pivot_y" type="int" value="-64"/>
  </properties>
  <image width="64" height="128" source="../sprites/props/door_proxy.png"/>
  <objectgroup draworder="index"/>
 </tile>
</tileset>
