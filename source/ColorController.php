<?php
    public function getColors()
    {
        @session_write_close();
          $result=array();
          $colors=Color::model()->findAll(array('order'=>'c_name_m'));
          foreach ($colors as $color) {
              $result[]=$color->c_name_m;
          }
          echo json_encode_ex4($result);
    }


    public function getColorByName($colorName)
{
    @session_write_close();
    
    $color = Color::model()->findOne(array('condition' => 'c_name_m=:name', 'params' => array(':name' => $colorName)));
    
    if ($color !== null) {
        echo json_encode_ex4($color->c_name_m);
    } else {
        echo json_encode_ex4(array('error' => 'Color not found'));
    }
}

