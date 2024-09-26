package com.password926.agijagi.child.domain;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Builder
public class ChildDetail {

    private long childId;

    private String name;

    private String nickname;

    private Gender gender;

    private LocalDate birthday;

    private String imageUrl;

    private String role;

    private long followerNum;

    public static ChildDetail of(Child child, String role, long followerNum) {
        String imageUrl = child.getImage() == null ? null : child.getImage().getUrl();
        return ChildDetail.builder()
                .childId(child.getId())
                .name(child.getName())
                .nickname(child.getNickname())
                .gender(child.getGender())
                .birthday(child.getBirthday())
                .imageUrl(imageUrl)
                .role(role)
                .followerNum(followerNum)
                .build();
    }
}
