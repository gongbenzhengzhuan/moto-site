package com.czy.moto.demos.service.impl;

import com.czy.moto.demos.service.MotoGatherService;
import com.czy.moto.demos.utils.HttpPostUtil;
import org.springframework.stereotype.Service;

@Service
public class MotoGatherServiceImpl implements MotoGatherService {
    @Override
    public void gatherMoto() {
        System.out.println(HttpPostUtil.sendGet("https://m.newmotor.com.cn/html/cmhd/131585.html",""));
    }
}
